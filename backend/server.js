const path = require('path');
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST || '127.0.0.1';
const DB_PORT = process.env.DB_PORT || 3306;
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
const DB_NAME = process.env.DB_NAME || 'sams_db';

// Email configuration
const EMAIL_USER = process.env.EMAIL_USER; // Owner's Gmail
const EMAIL_PASS = process.env.EMAIL_PASS; // Gmail app password
const EMAIL_TO = process.env.EMAIL_TO || EMAIL_USER; // Where to send feedback

const app = express();
app.use(cors());
app.use(express.json());

const FRONTEND_ROOT = path.join(__dirname, '..');
app.use(express.static(FRONTEND_ROOT));
app.get('/', (req, res) => res.sendFile(path.join(FRONTEND_ROOT, 'index.html')));

// Email transporter
let emailTransporter = null;
if (EMAIL_USER && EMAIL_PASS) {
  emailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS
    }
  });
}

let pool;

async function initDatabase() {
  const connection = await mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    multipleStatements: true,
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
  await connection.end();

  pool = mysql.createPool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
  });

  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS builds (
      id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      summary VARCHAR(255) NOT NULL,
      power_draw VARCHAR(50) NOT NULL,
      battery_life VARCHAR(50) NOT NULL,
      profile VARCHAR(50) NOT NULL,
      selection_json LONGTEXT NOT NULL,
      stats_json LONGTEXT NOT NULL,
      components_json LONGTEXT NOT NULL
    );
  `;

  const conn = await pool.getConnection();
  await conn.query(createTableSQL);
  conn.release();
}

function buildSummary(payload) {
  const names = Object.values(payload.components).map(c => c.name);
  return `Build saved (${names.join(' · ')})`;
}

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', environment: process.env.NODE_ENV || 'development' });
});

app.post('/api/builds', async (req, res) => {
  try {
    if (!pool) {
      return res.status(503).json({ message: 'Database not available.' });
    }

    const payload = req.body;
    if (!payload || !payload.components || !payload.stats) {
      return res.status(400).json({ message: 'Missing build payload.' });
    }

    const selectedComponents = Object.keys(payload.components || {});
    if (selectedComponents.length < 6) {
      return res.status(400).json({ message: 'All 6 components must be selected.' });
    }

    const summary = buildSummary(payload);
    const [result] = await pool.query(
      'INSERT INTO builds (summary, power_draw, battery_life, profile, selection_json, stats_json, components_json) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [
        summary,
        payload.stats.powerDraw || 'N/A',
        payload.stats.batteryLife || 'N/A',
        payload.stats.profile || 'Unset',
        JSON.stringify(payload.components),
        JSON.stringify(payload.stats),
        JSON.stringify(payload.components),
      ]
    );

    res.status(201).json({ id: result.insertId, message: 'Build saved successfully.' });
  } catch (error) {
    console.error('POST /api/builds error:', error);
    res.status(500).json({ message: 'Unable to save build.', error: error.message });
  }
});

app.get('/api/builds', async (req, res) => {
  try {
    if (!pool) {
      return res.status(503).json({ message: 'Database not available.' });
    }

    const [rows] = await pool.query('SELECT id, created_at, summary, power_draw, battery_life, profile, selection_json FROM builds ORDER BY created_at DESC LIMIT 50');
    res.json(rows.map(row => ({ ...row, selection: JSON.parse(row.selection_json || '{}') })));
  } catch (error) {
    console.error('GET /api/builds error:', error);
    res.status(500).json({ message: 'Unable to load builds.', error: error.message });
  }
});

app.post('/api/feedback', async (req, res) => {
  try {
    const { rating, category, mood, message, name, email, build } = req.body;

    if (!message || message.trim().length === 0) {
      return res.status(400).json({ message: 'Message is required.' });
    }

    if (!emailTransporter) {
      console.warn('Email not configured, feedback not sent.');
      return res.status(500).json({ message: 'Email service not configured.' });
    }

    // Format the email
    const subject = `SAMS Feedback: ${category || 'General'} - ${rating ? `${rating}/5 stars` : 'No rating'}`;

    let html = `<h2>New Feedback Received</h2>
<p><strong>From:</strong> ${name || 'Anonymous'} ${email ? `(${email})` : ''}</p>
<p><strong>Rating:</strong> ${rating ? '★'.repeat(rating) + '☆'.repeat(5 - rating) : 'Not provided'}</p>
<p><strong>Category:</strong> ${category || 'General'}</p>
${mood ? `<p><strong>Mood:</strong> ${mood}</p>` : ''}
<p><strong>Message:</strong></p>
<p style="background: #f5f5f5; padding: 10px; border-left: 4px solid #ccc;">${message.replace(/\n/g, '<br>')}</p>`;

    if (build) {
      html += `<h3>Attached Build</h3><pre>${JSON.stringify(build, null, 2)}</pre>`;
    }

    html += `<p><em>Sent at ${new Date().toLocaleString()}</em></p>`;

    const mailOptions = {
      from: EMAIL_USER,
      to: EMAIL_TO,
      subject: subject,
      html: html
    };

    await emailTransporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Feedback sent successfully.' });
  } catch (error) {
    console.error('POST /api/feedback error:', error);
    res.status(500).json({ message: 'Unable to send feedback.', error: error.message });
  }
});

initDatabase()
  .then(() => {
    console.log('Database initialized successfully.');
  })
  .catch(err => {
    console.warn('Database initialization failed (continuing without DB):', err.message);
    console.warn('Build saving will not work, but feedback emails will.');
  })
  .finally(() => {
    app.listen(PORT, () => {
      console.log(`SAMS backend listening on http://localhost:${PORT}`);
      console.log(`Database: ${pool ? `Connected to MySQL ${DB_USER}@${DB_HOST}:${DB_PORT}/${DB_NAME}` : 'Not connected (build saving disabled)'}`);
      console.log(`Email: ${emailTransporter ? 'Configured' : 'Not configured'}`);
    });
  });

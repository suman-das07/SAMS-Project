# ⬡ SAMS — Smartphone Assembly Management System

A web-based interactive frontend for selecting and validating smartphone hardware component configurations. Built as an academic full-stack project.

## 👥 Team

| Name | Role |
|------|------|
| Deep Raj Gupta | Integration, Documentation & Design|
| Suman Das | Backend & Database |
| Shashank N | Frontend & UI |
| Prajapati Harsh | EDA & Testing |

---

## 🗂️ Project Structure

```
sams-project/
├── index.html          # Main HTML — links to CSS + JS
├── css/
│   └── style.css       # All styles (desktop + responsive)
├── js/
│   └── app.js          # All JavaScript (data, logic, animations)
├── README.md
└── .gitignore
```

---

## ✨ Features

- **40+ components** across 6 categories: CPU · Battery · Camera · Display · Audio · Charging
- **Flying assembly animation** — components arc from catalog to phone slot with spark particles
- **Real-time validation** — power draw, battery life, thermal risk, compatibility
- **Build profiles** — Balanced, Camera-Centric, Battery-Centric, Powerhouse, etc.
- **Export report** — download build spec as `.txt`
- **Feedback modal** — star rating, category pills, mood selector, build attachment
- **Fully responsive**:
  - Desktop / Laptop / Curved Monitor → 3-panel layout
  - Tablet (≤1024px) → 2-panel layout
  - Mobile (≤768px) → Scrollable catalog + floating mini phone widget + slide-up stats drawer

---

## 🚀 Running Locally

No build tools or dependencies needed. Just open the file:

```bash
# Option 1 — open directly in browser
open index.html

# Option 2 — use VS Code Live Server extension (recommended)
# Right-click index.html → "Open with Live Server"

# Option 3 — Python simple server
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## 🔌 Backend Integration

A simple Node.js + Express backend is now included in `backend/`.
It stores saved builds into a MySQL database and exposes a `POST /api/builds` endpoint.

### Run the backend

1. Install dependencies:

```bash
cd backend
npm install
```

2. Copy the environment file:

```bash
cp .env.example .env
```

3. Update `.env` with your MySQL credentials.

4. Start the server:

```bash
npm start
```

5. Open the app in your browser via the backend host:

```bash
http://localhost:3000
```

The backend listens on `http://localhost:3000` by default.

### What the backend does

- saves build selections in MySQL
- creates the `sams_db` database and `builds` table automatically
- returns an acknowledgement message when the build is saved

### Frontend behavior

When the user clicks `SAVE BUILD`, the app now:

- validates that all 6 components are selected
- sends the build data to `/api/builds`
- shows a confirmation toast plus a browser acknowledgement popup
- stores the build in the MySQL database

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic) |
| Styling | Pure CSS3 (Grid, Flexbox, custom properties, animations) |
| Logic | Vanilla JavaScript (ES6+, no frameworks) |
| Fonts | Google Fonts — Rajdhani + Share Tech Mono |
| Backend | Node.js + Express |
| Database | MySQL (via mysql2) |
| Deployment | Vercel (frontend) + Railway / PlanetScale (DB) |

---

## 📦 Git Setup

```bash
git init
git add .
git commit -m "feat: initial SAMS frontend — HTML/CSS/JS separated"

# Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/sams-project.git
git branch -M main
git push -u origin main
```

---

## 📄 License

Academic project — All Rights Reserved © 2025 SAMS Team

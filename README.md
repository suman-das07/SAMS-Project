# ⬡ SAMS — Smartphone Assembly Management System

A web-based interactive frontend for selecting and validating smartphone hardware component configurations. Built as an academic full-stack project.

## 👥 Team

| Name | Role |
|------|------|
| Deep Raj Gupta | Frontend & UI |
| Suman Das | Backend & Database |
| Shashank N | Integration & Testing |
| Prajapati Harsh | Documentation & Design |

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

The frontend is currently standalone (in-memory state). To connect to the Node.js + Express + MySQL backend:

1. Replace `saveConfig()` in `js/app.js` with a `fetch()` POST to `/api/configurations`
2. Replace `renderList()` with a `fetch()` GET from `/api/components`
3. Set `CORS_ORIGIN` in your backend `.env` to your frontend URL

Backend repo / folder: `sams-backend/`

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

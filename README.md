# Nikhil Dhore — Software Developer Portfolio

A modern, high-performance personal developer portfolio website designed for **Nikhil Dhore** (Final-year B.Tech CSE AI & ML at KIT College of Engineering, Kolhapur; GATE 2026 CS Qualified).

Built with **pure JavaScript**, React, Vite, and Tailwind CSS. Showcases architectural deep dives into **Pulse** (Applied NLP & Serverless Heuristic Fallback) and **Sparq** (Real-Time Multiplayer Quiz with Server-Authoritative Clocks).

---

## ⚡ Highlights & Key Features

1. **Clean Editorial Aesthetic with Light & Dark Mode**: Neutral Slate / Graphite (`#0A0C10` dark, `#F8FAFC` light), zero cheesy AI purple/violet gradients, with a tactile Sun/Moon theme toggle in the navigation bar.
2. **De-Cluttered Recruiter-First Layout**: Clear visual hierarchy, scannable bullet points for problems & solutions, and generous whitespace.
3. **Verified Working Production Links**:
   - **Pulse Live Demo**: [feedback-analyzer-beta.vercel.app](https://feedback-analyzer-beta.vercel.app/)
   - **Pulse GitHub**: [github.com/nikhildhore9923/feedback-analyzer](https://github.com/nikhildhore9923/feedback-analyzer)
   - **Sparq Live Demo**: [sparq-quiz.vercel.app](https://sparq-quiz.vercel.app/)
   - **Sparq GitHub**: [github.com/nikhildhore9923/sparq-quiz](https://github.com/nikhildhore9923/sparq-quiz)
   - **LinkedIn**: [linkedin.com/in/nikhil-dhore-9b2318297](https://www.linkedin.com/in/nikhil-dhore-9b2318297)
   - **GitHub**: [github.com/nikhildhore9923](https://github.com/nikhildhore9923)
4. **Interactive Simulators (Collapsible)**:
   - **Pulse (AI Feedback Analyzer)**: Real-time sentiment & topic classifier simulation with a toggle to test the **Python cold-start circuit-breaker** switching to the local heuristic fallback in 14ms!
   - **Sparq (Multiplayer Quiz Platform)**: Live 15s server-authoritative timer simulation, dynamic question answering, live room leaderboard, and a **Network Drop & Token Reconnect** simulator.
5. **Deep Dive Architectural Modals**: Comprehensive technical tabs (System Architecture Flow, Engineering Challenges & Solutions, Key Capabilities, and Tech Stack).
6. **Command Palette (⌘K / Ctrl+K)**: Instant keyboard-driven navigation across all sections, resume viewer, and quick copy actions.
7. **In-App Resume Viewer & PDF Export**: A verified, printable resume modal pre-loaded with Nikhil's academic credentials, headshot, and GATE 2026 score.
8. **Contact & 1-Click Copy**: Instant clipboard copy with animated toast feedback and pre-composed mailto drafter.

---

## 🛠️ Tech Stack

- **Framework**: React 18 (Pure JavaScript / JSX)
- **Bundler**: Vite
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Icons**: Lucide React
- **Deployment**: Configured for Vercel, Netlify, or GitHub Pages

---

## 🚀 Quickstart & Local Development

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
This generates an optimized static distribution in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel (1-Click)

The site is built as a pure static single-page application and is 100% ready for Vercel:

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Nikhil Dhore Portfolio"
   git remote add origin https://github.com/nikhildhore/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**. Your portfolio will be live in under 45 seconds!

---

## ✏️ Easy Customization Guide

All personal info, project URLs, and credentials are intentionally centralized into one single easy-to-edit file:

📁 **`src/data/portfolioData.js`**

| To update... | Modify this field in `src/data/portfolioData.js`: |
| :--- | :--- |
| **Email Address** | `PERSONAL_INFO.email` |
| **Phone Number** | `PERSONAL_INFO.phone` |
| **LinkedIn URL** | `PERSONAL_INFO.linkedin` |
| **GitHub URL** | `PERSONAL_INFO.github` |
| **Project GitHub / Live Links** | `PROJECTS[0].githubUrl`, `PROJECTS[0].liveDemoUrl`, etc. |
| **Skills & Explanations** | `SKILLS` array |
| **Education & Grades** | `EDUCATION` array |
| **Certifications & GATE** | `ACHIEVEMENTS` array |

---

## 📋 Personal Details Verified From Resume

- **Name**: Nikhil Dhore
- **Phone**: +91-9284944578
- **Email**: dhorenikhil46@gmail.com
- **Institution**: KIT's College of Engineering (Autonomous), Kolhapur
- **Degree**: B.Tech CSE (AI & ML) — CGPA: 8.09 / 10
- **GATE 2026 (CS)**: Qualified (Score: 324)
- **HSC**: 83.67% (G.M.B. Jr. College, Arjuni Morgaon)
- **SSC**: 83.60% (Vidya Vihar Mandir, Lakhandur)
- **Flagship Projects**:
  1. **Pulse**: AI-Powered Customer Intelligence Platform (React, Node.js Vercel Serverless, Python FastAPI, Scikit-learn, Groq LLaMA 3, MySQL)
  2. **Sparq**: Real-Time Multiplayer Quiz Platform (React Vite, Node.js Express, Socket.io, JWT, Groq API, SQLite WAL mode)

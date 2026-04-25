# Sharon Medithi — Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-b8ff3f?style=for-the-badge&labelColor=0a0a0f)](https://sharonmedithi0304.github.io)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-181717?style=for-the-badge&logo=github)](https://pages.github.com)
[![HTML5](https://img.shields.io/badge/HTML5-Pure-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Embedded-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> *A dark, editorial-magazine-style personal developer portfolio. No frameworks. No build tools. Just pure, expressive HTML/CSS/JS.*

---

## Preview

> Open `index.html` in your browser or visit the [live demo](https://sharonmedithi0304.github.io) to see it in action.

---

## About

This is the personal portfolio website of **Sharon Medithi**, an IT Student based in Hyderabad, India. It showcases three real-world projects built with vanilla web technologies, a clean about section with a skills grid, and a minimal contact section — all packed into a single deployable HTML file.

---

## Projects Showcased

| # | Project | Description | Live |
|---|---------|-------------|------|
| 01 | **Focus OS** | Productivity app with Pomodoro timer & task tracking | [Demo](https://sharonmedithi0304.github.io/focus-os/) |
| 02 | **Split It** | Expense splitter with real-time calculation logic | [Demo](https://sharonmedithi0304.github.io/split-it/) |
| 03 | **Gravity Flux** | Physics-based browser animation & gravity simulation | [Demo](https://sharonmedithi0304.github.io/Gravity-Flux/) |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | Semantic HTML5 |
| Styling | Embedded CSS3 (Custom Properties, Grid, Flexbox, Animations) |
| Interactivity | Vanilla JavaScript (ES6+, Intersection Observer API) |
| Fonts | Google Fonts — Syne, Instrument Serif, DM Mono |
| Deployment | GitHub Pages |

---

## Features

- **Dark editorial aesthetic** — deep navy/charcoal background, cream typography, neon lime `#b8ff3f` accent
- **Page loader** with animated name reveal and progress bar
- **Custom dual-layer cursor** with smooth lag-follow effect (auto-hidden on touch devices)
- **Full-screen hero** — word-by-word name reveal, typewriter role cycling, animated gradient mesh background, CSS noise texture overlay
- **Scroll progress bar** running across the top of the viewport
- **Sticky navigation** with active section highlight and backdrop blur on scroll
- **Hamburger mobile drawer** with smooth open/close and Escape key support
- **Scroll-triggered fade-in** animations using Intersection Observer
- **3D tilt effect** on project cards driven by mousemove (rotateX/Y)
- **Marquee ticker strip** showing the tech stack
- **Fully responsive** — mobile-first, tested across 3 breakpoints
- **Accessible** — ARIA labels, semantic HTML5, keyboard navigable, proper `alt` text
- **SEO ready** — Open Graph and Twitter Card meta tags for social sharing
- **Zero dependencies** — no npm, no build step, no frameworks, instant deploy

---

## How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/sharonmedithi0304/sharonmedithi0304.github.io.git

# 2. Navigate into the folder
cd sharonmedithi0304.github.io

# 3. Open in browser
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

> No server needed. The file is fully self-contained — just open and go.

**Recommended:** Use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code for hot-reload during development. Right-click `index.html` → **Open with Live Server**.

---

## Deployment — GitHub Pages

### Step-by-step

```bash
# 1. Create a repo named exactly: sharonmedithi0304.github.io

# 2. Initialize and push
git init
git add .
git commit -m "init: project structure and base HTML"
git branch -M main
git remote add origin https://github.com/sharonmedithi0304/sharonmedithi0304.github.io.git
git push -u origin main
```

Then go to your repo → **Settings → Pages → Source: Deploy from branch → main / (root) → Save**

Your site goes live at **https://sharonmedithi0304.github.io** within ~60 seconds.

### For future updates

```bash
git add index.html
git commit -m "describe what you changed"
git push
```

---

## Commit History Guide

```bash
git commit -m "init: project structure and base HTML"
git commit -m "feat: hero section with animations"
git commit -m "feat: projects and skills sections"
git commit -m "feat: contact section and footer"
git commit -m "style: responsive design and polish"
git commit -m "docs: add detailed README"
```

---

## Project Structure

```
sharonmedithi0304.github.io/
│
├── index.html      # Complete portfolio — HTML, CSS, and JS in one file
└── README.md       # This file
```

---

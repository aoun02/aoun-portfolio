# Aoun Raza — Developer Portfolio

Personal portfolio website of **Aoun Raza**, Full Stack Engineer (Java · Spring Boot · Kafka · .NET 8 · React · Flutter · Azure Kubernetes).

🔗 **Live:** https://aounraza.vercel.app

## Features

- Single-page React app with smooth-scroll navigation and a mobile hamburger menu
- Code-editor style hero (`AounRaza.java`) with syntax colouring and line-by-line animation
- Scroll-reveal animations built with `IntersectionObserver` (no animation libraries)
- Experience timeline, skills grid, project cards and contact section
- Fully responsive — tuned for 320px phones, tablets and desktops
- Respects `prefers-reduced-motion`; hover effects disabled on touch screens
- Pastel **Catppuccin Mocha** theme using CSS custom properties
- All content driven from one file: [`src/data/profile.js`](src/data/profile.js)

## Tech Stack

| Layer | Tools |
|:--|:--|
| UI | React 19, JSX, plain CSS (no UI framework) |
| Build | Vite 6 |
| Lint | ESLint 9 |
| Hosting | Vercel (auto-deploy on every push to `main`) |

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # fixed navbar + mobile menu
│   ├── Hero.jsx        # intro + animated code editor
│   ├── Sections.jsx    # About, Experience, Skills, Projects, Contact, Footer
│   ├── Reveal.jsx      # scroll-reveal wrapper
│   └── Icons.jsx       # inline SVG icons
├── data/profile.js     # all text content
├── App.jsx
├── main.jsx
└── index.css           # theme + responsive styles
```

## Run Locally

Requires Node.js 18+.

```bash
git clone https://github.com/aoun02/aoun-portfolio.git
cd aoun-portfolio
npm install
npm run dev        # http://localhost:5173
```

Other scripts: `npm run build` (production build to `dist/`), `npm run preview` (serve the build), `npm run lint`.

## Author

**Aoun Raza** — [GitHub](https://github.com/aoun02) · [LinkedIn](https://www.linkedin.com/in/aoun-raza-5b2638285/) · aounraza008@gmail.com

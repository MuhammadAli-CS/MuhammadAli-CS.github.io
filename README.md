# Muhammad Ali - Personal Portfolio

A modern, minimal, and visually striking personal portfolio website for Muhammad Ali, a Computer Science undergraduate at Cornell University aspiring to be an AI researcher.

Built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## Design Features
- Beautiful Dark Theme with deep space blues and violet glowing accents
- Smooth scroll navigation
- Scroll-triggered reveal animations via `framer-motion`
- Fully responsive on Desktop, Tablet, and Mobile
- Code-themed typographic styling with `Inter` and monospace font pairings

## Local Development Setup

You will need [Node.js](https://nodejs.org/) installed to run this project.

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```
   *This will run the local Vite server, typically at `http://localhost:5173/`.*

## Deployment to GitHub Pages

1. **Build the Application**
   ```bash
   npm run build
   ```
   *This creates a `dist` folder containing your production-ready static files.*

2. **Deploy**
   Since this portfolio does not require a backend, you can use any static hosting (Vercel, Netlify, or GitHub Pages).
   To manually deploy to GitHub Pages:
   - Make sure your Vite config's `base` matches your repo name or is set to `./` (which is already configured in `vite.config.js`).
   - You can push the contents of the `dist` folder to the `gh-pages` branch, or use the `gh-pages` npm package.
   
   *Example using the gh-pages package:*
   ```bash
   npm install -D gh-pages
   ```
   *Add to your `package.json` scripts:*
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
   *Then run:*
   ```bash
   npm run deploy
   ```

## Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: react-icons (Feather icons)
- **Scrolling**: react-scroll

# Shreyansh Goyal - 3D Portfolio

An interactive 3D portfolio built with **React**, **Vite**, **React Three Fiber**, **Framer Motion** and **Tailwind CSS**.

## Features
- 3D hero scene (desk, chair, animated avatar) with a typing role effect and call-to-action buttons
- Scroll progress bar, scroll-spy navbar, back-to-top button
- Animated stats, work experience timeline with tech chips
- Interactive 3D tech-stack balls plus grouped skill cards
- Project cards with category filter, source/live links and highlights
- Contact form with validation, EmailJS support and a mailto fallback, plus quick contact cards
- SEO / Open Graph meta tags, responsive layout, reduced-motion support
- Heavy 3D canvases are lazy-mounted for faster load

## Getting started
```bash
npm install
cp .env.example .env   # add your EmailJS keys (optional)
npm run dev
```

## Editing your content
Almost everything lives in `src/constants/index.js`:
`profile` (name, email, links, typing roles), `stats`, `skillGroups`, `experiences`, `projects`.
Add a `live_link` to a project to show a "Live demo" button.

## Contact form (EmailJS)
Create a service + template on emailjs.com and put the IDs in `.env`:
`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`.
Without them the form opens the visitor's email app instead.

## Scripts
`npm run dev` | `npm run build` | `npm run preview` | `npm run lint`

## Credits
3D models from Sketchfab (see the license files in `public/`). Avatar via Ready Player Me, animation via Mixamo.

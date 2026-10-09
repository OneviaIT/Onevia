# Onevia — Everything as a Service

Marketing website for **Onevia**, a single, consolidated technology partner delivering the full
spectrum of modern software and infrastructure capabilities _"as a service"_ — build, scale, and
operate with one accountable partner.

> _Everything as a Service. One Partner. Infinite Possibilities._

## Tech stack

- **React 18** + **TypeScript**
- **Vite 5** (dev server & build)
- **Tailwind CSS 3** (design tokens in `tailwind.config.js`)
- **React Router 6** (multi-page routing)
- **lucide-react** (icons)

## Design language

- **Red Noir** (primary): pure-black canvas, oxblood→black gradient, parallax star fields, a central
  red glow, a masked grid, and a single rationed accent red `#ef233c`. Fonts: Manrope (display),
  Inter (body), JetBrains Mono (mono/terminal).
- **Terminal CLI** (signature section): neon green `#33ff00`, monospace, 0px radius, CRT scanlines,
  typewriter command lines, animated ASCII progress bar, and a blinking cursor — used on the home
  page and in each service-detail snippet, and on the 404 page.
- **Orbit / convergence logo** (`src/components/Logo.tsx`): inline SVG — concentric orbital rings,
  service nodes, and a glowing core ("one via").
- Motion: scroll-reveal (`src/lib/useScrollReveal.ts`), fade-in-up, conic-gradient border CTA,
  drifting stars. Respects `prefers-reduced-motion`.

## Pages

| Route               | Page                                            |
| ------------------- | ----------------------------------------------- |
| `/`                 | Home (hero video, services, terminal, pricing)  |
| `/services`         | Services catalog                                |
| `/services/:slug`   | Templated service detail (8 services)           |
| `/pricing`          | Engagement models + comparison table            |
| `/about`            | Story, timeline, values, team                   |
| `/resources`        | Articles index with search + filters            |
| `/careers`          | Perks + filterable open roles                   |
| `/contact`          | Contact form + info + waitlist                  |
| `*`                 | Terminal-styled 404                             |

## Content

All business content is centralized in `src/data/site.ts` (service catalog, taglines, engagement
model, pricing tiers, FAQs, values). Update it there to change copy across the whole site.

## Media

`public/media/` holds the generated hero visuals:

- `hero-convergence.mp4` — looping red particle-convergence background
- `hero-convergence.jpg` — poster/fallback still

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # typecheck (tsc) + production build
npm run preview  # preview the production build
npm run lint     # eslint
```

## Notes / placeholders

Onevia is an early-stage brand (founded 2025). The following are placeholders pending owner input:
contact email/phone/address, social URLs, team profiles, and customer case studies (current examples
are clearly labelled illustrative). The contact and newsletter forms are front-end only — wire them
to a backend or form service before launch.

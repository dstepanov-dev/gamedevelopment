# GameDevelopment.Company — Premium Redesign

A modern, minimalist, gaming-infused landing page rebuilt from
[gamedevelopment.company](https://gamedevelopment.company/). Premium glassmorphism, a
mid-tone slate-navy theme, futuristic typography, and snappy Framer Motion reveals.

## Tech Stack

- **Next.js 15** (App Router) — configured for **static export** (`output: 'export'`)
- **TypeScript** — strict mode
- **Tailwind CSS** — custom design system (brand colors extracted from the source site)
- **Framer Motion** — scroll-triggered reveals, staggered grids, animated modal
- **next/font** — Orbitron (display) + Plus Jakarta Sans (body), self-hosted at build

## Design System

| Token            | Value     | Use                                  |
| ---------------- | --------- | ------------------------------------ |
| Brand            | `#2487ce` | Primary accent (extracted from source) |
| Brand light      | `#469fdf` | Hover / highlights                   |
| Brand dark       | `#124265` | Deep navy                            |
| Cyan glow        | `#0dcaf0` | Secondary accent                     |
| Mid-tone base    | `#161d28` | Page background (never pitch black)  |

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build a static `out/` folder

```bash
npm run build      # generates ./out — pure HTML/CSS/JS
```

The `out/` directory is fully static and can be served from any shared host
(Apache/Nginx) with **no Node.js runtime**. Just upload its contents to your web root.

## Deploy to Vercel

This repo is import-ready. Connect it in Vercel and it deploys automatically —
no extra configuration required.

## Project Structure

```
src/
  app/
    layout.tsx          # fonts, metadata, providers, ambient background
    page.tsx            # section composition
    globals.css         # design tokens, glass utilities
  components/
    Header.tsx          # fixed glassmorphic header + mobile menu
    Hero.tsx            # high-impact hero + capability cards + stats
    ContactModal.tsx    # glass modal w/ simulated submit + success state
    ModalProvider.tsx   # React context driving the modal
    sections/           # About, Services, Platforms, Portfolio, Company, CTA, Contact, Footer
    ui/                 # Reveal, SectionHeading, AmbientBackground
  lib/
    content.ts          # all typed site copy/data (single source of truth)
public/
  images/               # exact assets from the source site
```

---

Original content & assets © their respective owners. This is a design/engineering
showcase redesign.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start development server (Vite)
npm run build    # Production build
npm run preview  # Preview production build locally
```

Deployed on Vercel with SPA routing configured in `vercel.json`.

## Project Overview

React + Vite landing page for Copacabana Coral Reef Jomtien, a beachfront property development in Thailand. Uses Tailwind CSS for styling and Framer Motion for animations.

## Architecture

### Routes (src/main.jsx)
- `/` → `App.jsx` - Main landing page with unit browser
- `/birmingham-to-beachfront` → `Advertorial.jsx` - Marketing advertorial page

### Key Files
- `src/App.jsx` - Main landing page (~2000 lines) containing all sections and unit data
- `src/components/Advertorial.jsx` - Standalone advertorial article page
- `index.html` - Contains SEO meta tags, JSON-LD schema, and Facebook Pixel integration

### Configuration
- `WHATSAPP_NUMBER` constant in both `App.jsx` and `Advertorial.jsx` - currently set to UK number `447775978555`
- Facebook Pixel ID `2627070917650520` is integrated in `index.html`

### Static Assets (public/)
- `/unit-types/` - Individual apartment floor plan images by type (see `/unit-types/INDEX.md` for status)
- `/floorplans/` - Tower floor plan images (page-XXX.jpg format from sales kit PDF)
- `/Floor-View-Matrix/` - Zone view diagrams
- Hero and gallery images at root level

### Unit Data Mappings (in App.jsx)
- `unitPlanMapping` - Maps unit type names to floor plan image paths
- `towerFloorPlanMapping` - Maps floor numbers (5-54, excluding 13) to tower floor plans
- `getWhatsAppLink()` / `getSmartFloorWhatsApp()` - Generate pre-filled WhatsApp messages

## Styling

Tailwind CSS with dark theme:
- Glassmorphism: `bg-white/5 backdrop-blur border border-white/10`
- Responsive grids collapse on mobile via `md:grid-cols-X`

## Conventions

- UK English (realise, optimise, colour)
- Sizes in square metres (sqm)
- Prices in Thai Baht (THB)
- Anchor navigation: `#highlights`, `#amenities`, `#residences`, `#investment`, `#location`, `#gallery`, `#faq`, `#enquire`

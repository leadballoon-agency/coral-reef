# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **single-file React landing page** for Coral Reef Jomtien, a beachfront property development in Thailand. The project uses React with Tailwind CSS and Framer Motion for animations.

**File:** `coral_reef_jomtien_premium_landing_page_react_tailwind.jsx`

## Key Architecture

### Single-File Component Structure
- The entire landing page is contained in one React component file
- Designed to be dropped into a Next.js or Vite React app
- Default export is a page-level component (`CoralReefJomtienPage`)

### Component Hierarchy
```
CoralReefJomtienPage (main)
├── CTA (sticky bottom bar with contact actions)
├── Header (sticky navigation)
├── Hero (animated intro with background image)
├── Highlights (5-column grid of property highlights)
├── Amenities (3-card grid with hover animations)
├── Residences (3-card grid for unit types: Studio, 1BR, 2BR)
├── Investment (data-driven statistics)
├── Location (proximity highlights + map)
├── Gallery (8-image grid)
├── FAQ (accordion-style 2-column grid)
├── Enquire (contact form + WhatsApp/phone CTAs)
└── Footer
```

### Reusable Sub-Components
- `Highlight` - Icon + label + value card for quick stats
- `AmenityCard` - Image card with hover animation for amenities
- `Stat` - Key-value pair for statistics
- `CTA` - Fixed bottom contact bar with brochure/WhatsApp/call buttons

## Project Data (Updated from Official Sources)

Real data integrated from Properties Thailand and Copacabana Group developer website:
- **Project Name**: Copacabana - Coral Reef near Jomtien Beach
- **Development**: 55-storey high-rise residential tower with 1,897 units
- **Completion**: Ready to move in by 2027
- **Construction Progress**: 38.94% overall (47.07% structural, 47.07% architectural, 10.49% MEP)
- **Starting Price**: 3.5M THB (Budget ranges: 3.1-11M+ THB / ~$90K-$325K+ USD)
- **Unit Types**: 1, 2, and 3-bedroom residences (various layouts from 32.1 to 71.5+ sqm)
- **Location**: 385/16 Moo.12, Jomtien 2nd Road - Short walk to Jomtien Beach and Night Market
- **Key Facilities**:
  - 2,000 sq.m. beach club with club lounge
  - Triple pool system: 30th floor beach view pool, 40th floor cantilever pool, 59th floor 25m rooftop lap pool
  - Panoramic gym with sea view
  - Sunken bar with drinks/snacks service
  - 30+ pocket gardens throughout
  - Multipurpose sport court (6th floor)
  - 24-hour security with CCTV, concierge service, valet parking, shuttle bus
- **Contact**: +66 95 945 1665 | Marketing_coral@copacabanacoralreef.com

## Placeholders Still to Replace

Before deploying, replace these remaining placeholders:
- `{{WHATSAPP_NUMBER}}` - WhatsApp contact number (format: country code + number, e.g., 66812345678)
- `{{PHONE_NUMBER}}` - Phone contact number

Hero image has been updated with official project image from Properties Thailand. Additional gallery images should be replaced with official renders when available.

## Styling Approach

**Tailwind CSS** - All styling is inline via Tailwind utility classes
- Glassmorphism effect: `bg-white/5 backdrop-blur border border-white/10`
- Gradient backgrounds: Radial + linear gradients on main container
- Responsive: Grid layouts collapse on mobile (`md:grid-cols-X`)
- Dark theme: White text on dark blue/black gradient background

**Framer Motion** - Used for:
- Hero section fade-in animation on mount
- Hover animations on amenity cards (`whileHover={{ y: -4 }}`)

## Copy & Localization

All copy is in **UK English** (e.g., "realise", "optimise", "colour")
- Distances in minutes
- Sizes in square metres (m²)
- Prices in Thai Baht (THB)

## Navigation

Smooth anchor-link navigation using `#section-id` links:
- `#highlights`, `#amenities`, `#residences`, `#investment`, `#location`, `#gallery`, `#faq`, `#enquire`

## External Links

Contact methods:
- WhatsApp: `https://wa.me/{{WHATSAPP_NUMBER}}`
- Phone: `tel:{{PHONE_NUMBER}}`

## Form Handling

The enquiry form (section `#enquire`) is currently **client-side only** with no backend submission. To make it functional:
1. Add `onSubmit` handler to the `<form>` element
2. Integrate with backend API or form service (e.g., Formspree, Netlify Forms, custom endpoint)
3. Add validation and error handling

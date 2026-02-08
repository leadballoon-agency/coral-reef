# Copacabana Coral Reef Jomtien

## Development Site + Affiliate Embed Test Site

> **Last Updated:** January 2025
> **Tech Stack:** Vite + React + JavaScript
> **Deployment:** Vercel (standalone project)
> **Primary Role:** Affiliate embed system testing

---

## Ecosystem Role

This project serves **two purposes** in the Property Thailand ecosystem:

1. **Development Site** - Landing page for Copacabana Coral Reef Jomtien property
2. **Affiliate Embed Test Site** - Battle testing the affiliate embed system before rolling out to real affiliates

| Project | Role |
|---------|------|
| **Platform** (`properties-thailand-platform`) | Central API + database |
| **Origin Bangtao** (`Origin-Phuket-Bangtao`) | Live development site |
| **Coral Reef** (this repo) | Development site + **Affiliate test site** |

---

## Development Commands

```bash
npm run dev      # Start development server (Vite)
npm run build    # Production build
npm run preview  # Preview production build locally
```

Deployed on Vercel with SPA routing configured in `vercel.json`.

---

## Project Structure

```
Property-Thailand/
├── src/
│   ├── App.jsx                    # Main landing page (~2000 lines)
│   ├── main.jsx                   # React entry point with routes
│   │
│   ├── components/
│   │   ├── EmbeddableAgent.jsx    # Affiliate-ready chat widget
│   │   ├── Advertorial.jsx        # Marketing advertorial page
│   │   └── AffiliateSignup.jsx    # Affiliate registration (if present)
│   │
│   └── lib/
│       └── platformApi.js         # Platform API client
│
├── public/
│   ├── unit-types/                # Floor plan images by type
│   ├── floorplans/                # Tower floor plans
│   └── Floor-View-Matrix/         # Zone view diagrams
│
├── AFFILIATE_EMBED_GUIDE.md       # Step-by-step embed instructions for affiliates
├── vercel.json
└── package.json
```

---

## Platform API Integration

### API Client (`src/lib/platformApi.js`)

```javascript
const PLATFORM_API_URL = 'https://properties-thailand-platform.vercel.app/api/chat';

export async function callPlatformChat(message, developmentSlug, conversationHistory = [], options = {}) {
  // Sends to platform API with:
  // - message
  // - developmentSlug
  // - agentType
  // - conversationHistory
  // - affiliateCode (for attribution)
}

export function getAffiliateCode() {
  // Extracts ?ref= or ?affiliate= from URL
  const params = new URLSearchParams(window.location.search);
  return params.get('ref') || params.get('affiliate') || undefined;
}
```

---

## Affiliate Embed Testing

This site is the **test environment** for the affiliate embed system. Use it to:

1. Test how the chat widget looks on a real site
2. Verify affiliate code tracking works (`?ref=test-affiliate`)
3. Confirm leads appear in admin dashboard with correct attribution
4. Document issues before rolling out to real affiliates

### Testing Affiliate Tracking

```
1. Visit: https://coral-reef-site.vercel.app/?ref=test-affiliate
2. Open the chat widget
3. Send a test message
4. Check admin dashboard (https://pt-admin.vercel.app)
5. Verify lead shows affiliate attribution
```

### EmbeddableAgent Component

The `EmbeddableAgent.jsx` component is the affiliate-ready widget:

```jsx
<EmbeddableAgent
  developmentSlug="copacabana-jomtien"
  agentType="sales"
  accentColor="#0ea5e9"
  buttonLabel="Chat with AI Agent"
/>
```

**Features:**
- Language selection (5 languages)
- Affiliate code capture and display
- Quick action buttons
- Full conversation history
- Platform API integration

---

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `App.jsx` | Main landing page with unit browser |
| `/birmingham-to-beachfront` | `Advertorial.jsx` | Marketing advertorial page |

---

## Key Files

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main landing page with all sections and unit data |
| `src/components/EmbeddableAgent.jsx` | Affiliate-ready chat widget |
| `src/components/Advertorial.jsx` | Standalone advertorial article |
| `src/lib/platformApi.js` | Platform API client |
| `AFFILIATE_EMBED_GUIDE.md` | Documentation for affiliates |

---

## Configuration

### Constants in App.jsx

```javascript
const WHATSAPP_NUMBER = '447775978555';  // UK number
```

### Facebook Pixel

Pixel ID `2627070520` integrated in `index.html`.

---

## Unit Data Mappings (in App.jsx)

- `unitPlanMapping` - Maps unit type names to floor plan image paths
- `towerFloorPlanMapping` - Maps floor numbers (5-54, excluding 13) to tower floor plans
- `getWhatsAppLink()` / `getSmartFloorWhatsApp()` - Generate pre-filled WhatsApp messages

---

## Static Assets

| Directory | Contents |
|-----------|----------|
| `/unit-types/` | Individual apartment floor plans by type |
| `/floorplans/` | Tower floor plans (page-XXX.jpg from sales kit) |
| `/Floor-View-Matrix/` | Zone view diagrams |

---

## Styling Conventions

- **Tailwind CSS** with dark theme
- Glassmorphism: `bg-white/5 backdrop-blur border border-white/10`
- Responsive grids collapse on mobile via `md:grid-cols-X`
- UK English (realise, optimise, colour)
- Sizes in square metres (sqm)
- Prices in Thai Baht (THB)

---

## Anchor Navigation

```
#highlights, #amenities, #residences, #investment, #location, #gallery, #faq, #enquire
```

---

## Environment Variables

**None required** - All API calls go to the platform.

---

## Related Projects

| Project | Path | Role |
|---------|------|------|
| **Platform** | `/Volumes/2 TB SSD/Desktop Projects/properties-thailand-platform` | API + Admin |
| **Origin Bangtao** | `/Volumes/2 TB SSD/Desktop Projects/Origin-Phuket-Bangtao` | Live development site |

---

## Affiliate Embed Guide

See `AFFILIATE_EMBED_GUIDE.md` in this repo for comprehensive instructions on how affiliates can embed the chat widget on their own websites.

---

*Documentation for Copacabana Coral Reef Jomtien - Part of Property Thailand Ecosystem*

# Copacabana Coral Reef - Website Documentation

**Project:** Luxury Property Landing Page
**Developer:** Copacabana Group
**Property:** Coral Reef Jomtien, Pattaya, Thailand
**Completed:** October 2025
**Tech Stack:** React 18 + Vite, Framer Motion, TailwindCSS

---

## 📋 Project Overview

A high-converting, mobile-first landing page for a luxury beachfront condominium development in Jomtien Beach, Pattaya. The site features 1,897 units across 55 floors with prices from 3.5M THB ($90K USD).

### URLs
- **Live Site:** https://jomtienproperty.com
- **Repository:** /Users/marktaylor/Desktop/Property-Thailand
- **Local Dev:** http://localhost:5173

### Key Metrics
- Single-page React application
- 17 unit types (Studio to 3BR)
- Floor range: 3-59
- 3 pool floors with special amenities (30, 40, 59)
- Pre-construction investment opportunity

---

## 🎯 Key Features Implemented

### 1. Smart Floor Request System ⭐ (Latest Feature)
**Purpose:** Help users request specific floor plans via WhatsApp with contextual messaging

**Implementation:**
- Mobile-first UX design
- WhatsApp deep linking with pre-filled messages
- Contextual floor information (pool floors, premium floors)
- Smart floor selection algorithm based on unit's floor range

**Technical Details:**
```javascript
// Helper functions
getSmartFloorWhatsApp(unit, floor, floorContext)
getFloorContext(floor) // Returns emoji, label, description

// Floor contexts:
- Floor 30: 🏊 Beach View Pool
- Floor 40: 🌅 Sky Cantilever Pool
- Floor 59: 🏖️ Rooftop Infinity Pool
- Floor 50+: 🔝 Premium Upper Floors
- Floor 25+: ⭐ Mid-High Rise
```

**User Flow:**
1. User clicks "Preview Floor Plan" on any unit
2. Modal opens with unit layout image
3. "Smart Floor Requests" section shows 2-4 contextual floor buttons
4. Each button opens WhatsApp with pre-filled message like:
   ```
   Hi! I'm interested in Type D1 (3BR, 165sqm) on Floor 40 - Sky Cantilever Pool.

   Can you send me:
   • Tower floor plan for Floor 40
   • This unit's position on that floor
   • Availability and pricing

   Thank you! 🏢
   ```

**Analytics Tracking:**
```javascript
fbq('trackCustom', 'SmartFloorRequest', {
  unit_type: selectedUnit.type,
  floor: floor,
  floor_context: label
});
```

---

### 2. Interactive Unit Browser

**Features:**
- Quick filters: Bedrooms, View Type, Budget slider
- Advanced filters modal with floor range slider
- Real-time filtering (17 units → filtered results)
- Unit cards with key info: size, price, floor range, view type

**Filter Options:**
- Bedrooms: All, 1BR, 2BR, 3BR
- View Type: All, Direct Sea View, Sea View
- Budget: 3.5M - 25M THB (with USD conversion)
- Floor Range: 3-59 (with pool floor quick-jump buttons)

**Unit Card Data:**
```javascript
{
  type: "D1",
  beds: 3,
  size: 165,
  view: "Direct Sea View",
  floorRange: "40-54",
  priceFrom: 17.8,
  priceUSD: 457,
  imagePath: "/unit-plans/d1.jpg"
}
```

---

### 3. Quiz / Decision Helper

**Purpose:** Help undecided users find the right unit type

**Questions:**
1. Primary use? (Investment rental / Holiday home / Permanent residence)
2. Bedrooms needed? (Studio / 1BR / 2BR / 3BR)
3. Budget range? (Under 5M / 5-10M / 10-15M / 15M+)
4. View priority? (Sea view essential / Nice to have / Not important)
5. Floor preference? (High floors / Mid-range / No preference)

**Matching Algorithm:**
- Scores each unit based on answers
- Returns top 3 recommendations
- Shows "Perfect Match" badge for 100% score

---

### 4. Investment Calculator (Email Gated)

**Features:**
- Projected NET yield: 6-8%
- Pre-construction discount: 15-20%
- Occupancy rate: 75-85%
- Break-even timeline: 12-15 years

**Example Calculations:**
- **Type 4 (1BR):** 3.7M THB purchase → 22-26K THB/month rent → 7.1% NET yield
- **Type 19 (2BR):** 7.7M THB purchase → 40-48K THB/month rent → 6.2% NET yield

**Payment Structure:**
1. Reservation: 50K THB
2. Contract (30 days): 30%
3. Construction: 40% staged
4. Completion: 30% or finance

---

### 5. Interactive Floor Plans

**Tower Floor Plans:**
- 45 floor layouts mapped
- Click floor number → see unit positions
- Pool floor indicators (30, 40, 59)

**Mapping Structure:**
```javascript
const towerFloorPlanMapping = {
  30: '/floor-plans/30.jpg',  // Beach View Pool
  40: '/floor-plans/40.jpg',  // Sky Cantilever Pool
  45: '/floor-plans/45.jpg',
  50: '/floor-plans/50.jpg',
  54: '/floor-plans/54.jpg',
  59: '/floor-plans/59.jpg',  // Rooftop Infinity Pool
  // ... 45 total
};
```

---

## 🏗️ Technical Architecture

### Tech Stack
- **Framework:** React 18.3.1
- **Build Tool:** Vite 5.4.1
- **Animation:** Framer Motion 11.3.28
- **Styling:** TailwindCSS (inline utilities)
- **Image Optimization:** Custom lazy loading component
- **Analytics:** Facebook Pixel + Custom Events

### Component Structure
```
App.jsx (3,000+ lines - single component)
├── Hero Section
├── Quick Stats
├── Amenities Showcase
├── Unit Browser (with filters)
│   ├── Quick Filters
│   ├── Advanced Filters Modal
│   ├── Unit Cards
│   └── Unit Detail Modal (with Smart Floor Requests)
├── Quiz Modal
├── Investment Section (email gated)
├── Location Map
├── FAQ Accordion
├── CTA Section
└── Footer

Components:
- LazyImage: Intersection Observer for lazy loading
- Modal wrapper (Framer Motion AnimatePresence)
```

### State Management
```javascript
// Main filters
const [bedroomFilter, setBedroomFilter] = useState('all');
const [viewFilter, setViewFilter] = useState('all');
const [maxBudget, setMaxBudget] = useState(25);
const [minFloor, setMinFloor] = useState(3);

// Modals
const [showFilters, setShowFilters] = useState(false);
const [showQuiz, setShowQuiz] = useState(false);
const [selectedUnit, setSelectedUnit] = useState(null);
const [showTowerFloorPlan, setShowTowerFloorPlan] = useState(false);

// Quiz
const [quizStep, setQuizStep] = useState(0);
const [quizAnswers, setQuizAnswers] = useState({});

// Investment
const [showInvestment, setShowInvestment] = useState(false);
const [email, setEmail] = useState('');
```

### Data Structure

**Unit Catalog (17 types):**
```javascript
const unitTypes = [
  {
    type: "3",
    beds: 1,
    size: 32.1,
    view: "Direct Sea View",
    floorRange: "7-50",
    priceFrom: 3.5,
    priceUSD: 90,
    imagePath: "/unit-plans/3.jpg"
  },
  // ... 16 more
];
```

**Amenities:**
- Rooftop Infinity Pool (59th floor)
- Sky Pool & Lounge (40th floor)
- Beachfront Pool Deck (30th floor)
- Premium Fitness Center
- Beach Club Lounge (2,000 sqm)
- 30+ Garden Sanctuaries

---

## 📊 SEO & Marketing Implementation

### Meta Tags & Schema Markup
```html
<!-- Primary Meta Tags -->
<title>Copacabana Coral Reef Jomtien | Luxury Beachfront Condos Thailand</title>
<meta name="description" content="Premium beachfront condos in Jomtien Beach, Pattaya. 55-storey tower with 1,897 units, rooftop pools & 5-star amenities. From 3.5M THB. Pre-construction investment opportunity." />

<!-- Open Graph (Facebook/LinkedIn) -->
<meta property="og:title" content="Copacabana Coral Reef Jomtien | Luxury Beachfront Condos" />
<meta property="og:image" content="https://jomtienproperty.com/hero-optimized.jpg" />

<!-- JSON-LD Schema -->
- RealEstateAgent
- Product (with AggregateOffer)
- Place (with GeoCoordinates)
- WebPage
- Residence (with amenityFeature)
```

### Facebook Pixel Events

**Standard Events:**
```javascript
fbq('track', 'PageView');
fbq('track', 'Contact');  // WhatsApp clicks
fbq('track', 'Lead');     // Email submissions
```

**Custom Events:**
```javascript
fbq('trackCustom', 'QuizStarted');
fbq('trackCustom', 'QuizCompleted', { recommendations: 3 });
fbq('trackCustom', 'ViewUnitPlan', { unit_type, bedrooms, price });
fbq('trackCustom', 'ViewTowerFloorPlan', { floor_number });
fbq('trackCustom', 'SmartFloorRequest', { unit_type, floor, floor_context });
fbq('trackCustom', 'InvestmentUnlocked', { email });
fbq('trackCustom', 'FilterApplied', { bedrooms, view, max_budget, min_floor });
```

### WhatsApp Strategy

**Main CTA:** `https://wa.me/{{WHATSAPP_NUMBER}}`

**Contextual Messages:**
1. **General inquiry:** "Hi! I'm interested in Copacabana Coral Reef..."
2. **Unit-specific:** "I'm interested in Type D1 (3BR, 165sqm)..."
3. **Smart floor request:** "I'm interested in Type D1 on Floor 40 - Sky Cantilever Pool..."
4. **Investment inquiry:** "I'd like a personalized ROI projection..."

---

## 🎨 Design & UX Decisions

### Mobile-First Approach
- All CTAs lead to WhatsApp (mobile-optimized)
- Touch-friendly buttons (min 44px)
- Simplified navigation on mobile
- Smart floor requests optimized for thumb zone

### Conversion Optimization
1. **Hero CTA:** "Find Your Perfect Unit" (scroll to units)
2. **WhatsApp floating button:** Always visible
3. **Quiz for undecided users:** Guides to recommendations
4. **Email gate on investment data:** Lead capture
5. **Multiple WhatsApp entry points:** 15+ throughout page

### Animation Strategy
```javascript
// Framer Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Modal animations
<AnimatePresence>
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  />
</AnimatePresence>
```

---

## 🚀 Performance Optimizations

### Image Strategy
1. **Hero image:** Optimized WebP (hero-optimized.jpg)
2. **Unit plans:** Lazy loaded on modal open
3. **Tower floor plans:** Lazy loaded on click
4. **Amenity images:** Lazy loading with IntersectionObserver

### Lazy Loading Component
```javascript
const LazyImage = ({ src, alt, className, priority = false }) => {
  const [imageSrc, setImageSrc] = useState(priority ? src : null);
  const imgRef = useRef();

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setImageSrc(src);
        observer.disconnect();
      }
    });

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [src, priority]);

  return <img ref={imgRef} src={imageSrc || placeholder} ... />;
};
```

### Build Performance
```bash
npm run build
# Outputs to /dist
# Optimized for production
```

---

## 📁 File Structure

```
Property-Thailand/
├── index.html              # Meta tags, Schema markup, FB Pixel
├── src/
│   ├── main.jsx           # React entry point
│   └── App.jsx            # Main component (3,000+ lines)
├── public/
│   ├── hero-optimized.jpg
│   ├── logo.png
│   ├── unit-plans/        # 17 unit layout images
│   │   ├── 3.jpg
│   │   ├── 4.jpg
│   │   ├── d1.jpg
│   │   └── ...
│   └── floor-plans/       # 45 tower floor layouts
│       ├── 30.jpg (Beach Pool)
│       ├── 40.jpg (Sky Pool)
│       ├── 45.jpg
│       ├── 54.jpg
│       ├── 59.jpg (Rooftop Pool)
│       └── ...
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔧 Development Setup

### Install Dependencies
```bash
cd /Users/marktaylor/Desktop/Property-Thailand
npm install
```

### Run Development Server
```bash
npm run dev
# Opens at http://localhost:5173
```

### Build for Production
```bash
npm run build
# Outputs to ./dist
```

### Deploy
```bash
# Upload ./dist to hosting
# Configure domain: jomtienproperty.com
```

---

## 📝 Content Strategy

### Target Audience
1. **UK/European investors** (primary)
2. **Thai property buyers**
3. **Expats in Thailand**
4. **Holiday home seekers**

### Value Propositions
1. **Pre-construction pricing:** 15-20% below completion value
2. **Rental income:** 6-8% NET yield projected
3. **Foreign-friendly ownership:** Freehold options available
4. **Award-winning developer:** Copacabana Group (20+ years)
5. **Prime location:** Jomtien Beach, 2-min walk to beach

### Conversion Funnel
```
Homepage
  ↓
Browse Units (filters)
  ↓
View Unit Details (modal)
  ↓
Smart Floor Request (WhatsApp) → CONVERSION
  or
Take Quiz → Recommendations → WhatsApp → CONVERSION
  or
Unlock Investment Data (email) → Follow-up → CONVERSION
```

---

## 🐛 Known Issues & Future Enhancements

### Current Limitations
1. **Single-component architecture:** Could be split into smaller components
2. **No backend:** All data is hardcoded in frontend
3. **Placeholder values:** WhatsApp number, phone number need updating
4. **No CMS:** Content updates require code changes

### Future Enhancements
1. **CMS Integration:** Connect to headless CMS for unit data
2. **Availability tracking:** Real-time unit availability
3. **3D virtual tours:** Interactive unit walkthroughs
4. **Multi-language:** Thai + English versions
5. **Booking system:** Direct reservation flow
6. **Payment gateway:** Online deposit payments

---

## 📊 Success Metrics to Track

### Analytics Goals
- WhatsApp click-through rate
- Quiz completion rate
- Email capture rate (investment section)
- Smart floor request usage
- Most viewed unit types
- Average time on page
- Bounce rate by traffic source

### Conversion Tracking
- Track which floor requests get the most clicks
- A/B test different quiz questions
- Monitor investment calculator unlock rate
- Analyze filter usage patterns

---

## 🎓 Lessons Learned

### What Worked Well
1. **Mobile-first WhatsApp strategy:** Perfect for property inquiries
2. **Smart floor requests:** Users love contextual messaging
3. **Quiz funnel:** Helps undecided users quickly
4. **Email gate on ROI data:** Good lead quality
5. **Single-page app:** Fast, smooth UX

### What Could Be Improved
1. **Component architecture:** Break into smaller pieces
2. **State management:** Consider Redux/Zustand for larger scale
3. **Testing:** Add unit tests for filter logic
4. **Accessibility:** Improve keyboard navigation
5. **Backend integration:** Dynamic availability

---

## 📞 Contact & Support

**Developer:** Mark Taylor
**Client:** Properties Thailand
**Property Developer:** Copacabana Group
**Project Timeline:** October 2025
**Deployment:** jomtienproperty.com

---

**Last Updated:** October 6, 2025
**Version:** 1.0
**Status:** ✅ Production Ready

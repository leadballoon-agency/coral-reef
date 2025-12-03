import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Waves, Trees, Building2, BedDouble, Ruler, Calendar, ShieldCheck, LineChart, Phone, MessageCircle, Award, TrendingUp } from "lucide-react";

// Configuration
const WHATSAPP_NUMBER = "447775978555";

// Facebook Pixel helper function
const fbq = (...args) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq(...args);
  }
};

// Unit plan image mapping - individual apartment interior layouts from /public/unit-types/
// These show the layout of individual units (NOT the tower floor plans)
// See /public/unit-types/INDEX.md for full documentation
const unitPlanMapping = {
  "Type 3": "/unit-types/type-3.jpg",
  "Type 4": "/unit-types/type-4-4.1.jpg",
  "Type 6.1": "/unit-types/type-6.1-new.jpg",
  "Type 9": "/unit-types/type-9.jpg",
  "Type 12": "/unit-types/type-12.jpg",
  "Type 13": "/unit-types/type-13.jpg",
  "Type 14": "/unit-types/type-14.jpg",
  "Type 15": "/unit-types/type-15.jpg",
  "Type 15.1": "/unit-types/type-15.1.jpg",
  "Type 15.2": "/unit-types/type-15.2.jpg",
  "Type 16": "/unit-types/type-16.jpg",
  "Type 19": "/unit-types/type-19.jpg",
  // 3 Bedroom Combined Units
  "Type A2": "/unit-types/A2-146-4sqm.jpg",
  "Type A4": "/unit-types/A4-146-4sqm.jpg",
  "Type A5": "/unit-types/A5-122-5sqm.jpg",
  "Type AB1": "/unit-types/AB1-195sqm.jpg",
  "Type D1": "/unit-types/D1-165sqm.jpg"
};

// Tower floor plan mapping - complete floor layouts from /public/floor-plans/
// Shows all unit positions on each floor (floors 5-54, excluding 13)
const towerFloorPlanMapping = {};
for (let floor = 5; floor <= 54; floor++) {
  if (floor !== 13) { // Skip floor 13
    towerFloorPlanMapping[floor] = `/floor-plans/${floor}.jpg`;
  }
}
// Special floor (12ath)
if (towerFloorPlanMapping[12]) {
  // Keep 12.jpg, optionally note 12ath.jpg exists
}

// Generate WhatsApp link with pre-filled message
const getWhatsAppLink = (unit) => {
  const message = `Hi! I'm interested in ${unit.type} (${unit.beds}BR, ${unit.size}sqm, ${unit.view}). Please send the unit layout 📐`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

// Smart WhatsApp link for specific floor requests
const getSmartFloorWhatsApp = (unit, floor, floorContext) => {
  const message = `Hi! I'm interested in ${unit.type} (${unit.beds}BR, ${unit.size}sqm) on Floor ${floor} - ${floorContext}.

Can you send me:
• Tower floor plan for Floor ${floor}
• This unit's position on that floor
• Availability and pricing

Thank you! 🏢`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

// Get floor context labels
const getFloorContext = (floor) => {
  if (floor === 6) return { emoji: '💎', label: '6th Floor Amenities', description: 'Near 6th floor pool with Jacuzzi, Onsen, Sauna and Steam room' };
  if (floor === 51) return { emoji: '🌅', label: 'Sky Cantilever Pool', description: 'Near 51st floor cantilever pool with infinity views and pool bar' };
  if (floor === 59) return { emoji: '🏖️', label: 'Rooftop Infinity Pool', description: 'Rooftop level with 25m floating lap pool' };
  if (floor >= 50) return { emoji: '🔝', label: 'Premium Upper Floors', description: 'Best views and maximum privacy' };
  if (floor >= 25) return { emoji: '⭐', label: 'Mid-High Rise', description: 'Great balance of views and accessibility' };
  return { emoji: '🏢', label: `Floor ${floor}`, description: `Level ${floor}` };
};

// Lazy loading image component
const LazyImage = ({ src, alt, className, priority = false }) => {
  const [imageSrc, setImageSrc] = useState(priority ? src : null);
  const [imageRef, setImageRef] = useState(null);

  useEffect(() => {
    if (priority || !imageRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "50px" }
    );

    observer.observe(imageRef);
    return () => observer.disconnect();
  }, [imageRef, src, priority]);

  return (
    <img
      ref={setImageRef}
      src={imageSrc || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23333'/%3E%3C/svg%3E"}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
    />
  );
};

/**
 * Copacabana - Coral Reef Jomtien — Pitch-Ready Landing Page
 * -------------------------------------------------
 * Built as a single-file React component with Tailwind CSS.
 * - Modern, premium aesthetic (glassmorphism + gradients)
 * - Sticky CTA, hero video/image, highlights, amenities, residences, investment, map, gallery, FAQ, contact
 * - All copy UK English.
 * - Official project data from Properties Thailand
 * - 55-storey tower with 1,897 units • Completion end 2027 • From 3.5M THB
 * - Designed to drop into a Next.js or Vite React app. Default export is a page-level component.
 */

const heroImages = [
  // Official project images from Properties Thailand
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_6199.jpg",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_6389.jpg",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_6389-scaled.jpg",
];

// Unit types data from Copacabana developer site
// View types: "Direct Sea View" (Zone A) or "Sea View" (Zone B-C)
// Floor ranges: Based on comprehensive floor plan analysis (specific units may be sold - contact for availability)
const unitTypes = [
  { type: "Type 3", size: 32.1, beds: 1, priceFrom: 3.5, priceGBP: 88, view: "Direct Sea View", floorRange: "7-50", tour3D: "https://my.matterport.com/show/?m=wug3dEdCdqP" },
  { type: "Type 4", size: 34.3, beds: 1, priceFrom: 3.7, priceGBP: 93, view: "Sea View", floorRange: "6-48", tour3D: "https://my.matterport.com/show/?m=xLwCG1Eefnq" },
  { type: "Type 6.1", size: 38.6, beds: 1, priceFrom: 4.2, priceGBP: 105, view: "Sea View", floorRange: "6-48", tour3D: "https://my.matterport.com/show/?m=u3XaeBLSEg5" },
  { type: "Type 9", size: 38.5, beds: 1, priceFrom: 4.1, priceGBP: 103, view: "Sea View", floorRange: "7-50", tour3D: "https://my.matterport.com/show/?m=UMub2fqduU5" },
  { type: "Type 13", size: 44.8, beds: 1, priceFrom: 4.8, priceGBP: 120, view: "Sea View", floorRange: "7-49", tour3D: "https://my.matterport.com/show/?m=fVrSaJ7G9yH" },
  { type: "Type 14", size: 64.9, beds: 2, priceFrom: 7.0, priceGBP: 175, view: "Sea View", floorRange: "16-54", tour3D: "https://my.matterport.com/show/?m=MNHRJwjS4Kf" },
  { type: "Type 15", size: 67.6, beds: 2, priceFrom: 7.3, priceGBP: 183, view: "Sea View", floorRange: "6-48", tour3D: "https://my.matterport.com/show/?m=SnFEvMTf7XD" },
  { type: "Type 19", size: 71.5, beds: 2, priceFrom: 7.7, priceGBP: 193, view: "Direct Sea View", floorRange: "26-48" },
  { type: "Type 12", size: 52.8, beds: 1, priceFrom: 5.7, priceGBP: 143, view: "Sea View", floorRange: "7-41" },
  { type: "Type 15.1", size: 70.5, beds: 2, priceFrom: 7.6, priceGBP: 190, view: "Sea View", floorRange: "6-48" },
  { type: "Type 15.2", size: 82.7, beds: 2, priceFrom: 8.9, priceGBP: 223, view: "Direct Sea View", floorRange: "16-42" },
  { type: "Type 16", size: 84.7, beds: 2, priceFrom: 9.2, priceGBP: 230, view: "Sea View", floorRange: "16-42" },
  // 3 Bedroom Units (Exclusive Upper Floors)
  { type: "Type A2", size: 146.4, beds: 3, priceFrom: 15.8, priceGBP: 395, view: "Sea View", floorRange: "45-50" },
  { type: "Type A4", size: 146.4, beds: 3, priceFrom: 15.8, priceGBP: 395, view: "Sea View", floorRange: "49-49" },
  { type: "Type A5", size: 122.5, beds: 3, priceFrom: 13.2, priceGBP: 330, view: "Sea View", floorRange: "25-49" },
  { type: "Type AB1", size: 195, beds: 3, priceFrom: 21.0, priceGBP: 525, view: "Direct Sea View", floorRange: "51-54" },
  { type: "Type D1", size: 165, beds: 3, priceFrom: 17.8, priceGBP: 445, view: "Direct Sea View", floorRange: "40-54" },
];

const gallery = [
  // Official project images from Properties Thailand website gallery
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/Copacabana-1.png",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_6387.jpg",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/03/4-1.jpg",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_7645.jpg",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_7644.png",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_7643.png",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_7642.png",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_7641.png",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_7640.png",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_7639.png",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_7638.png",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_7637.png",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_7636.png",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_7635.png",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_7634.png",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_7633.png",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_7631.png",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_6393.jpg",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_6391.jpg",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_6390.jpg",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_6389.jpg",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_6388.jpg",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_6386.jpg",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_6199.jpg",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/1737601889381.jpg",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/1737601885064.jpg",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/1737601884948.jpg",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/1737601884835.jpg",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/1737601884710.jpg",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/1737601884586.jpg",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/1737601884434.jpg",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/1737601884277.jpg",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/1737601884131.jpg",
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/1737601883927.jpg",
].slice(0, 8); // Show 8 images in the grid (can adjust as needed)

const faqs = [
  {
    q: "Can foreign buyers own at Coral Reef Jomtien?",
    a: "Yes — Thailand permits foreign ownership under specific structures (freehold via condo quota or long leasehold). Our team will guide you through the compliant route with independent legal counsel.",
  },
  {
    q: "What are the projected rental yields?",
    a: "Yields vary by unit type, seasonality, furnishing and management. In Jomtien, quality beachfront stock typically achieves attractive occupancy with strong holiday demand. Request our latest projections and comps.",
  },
  {
    q: "When is completion?",
    a: "Ready to move in by 2027. Current construction progress is at 38.94% overall completion (47.07% structural work, 47.07% architectural work, 10.49% MEP work). Regular progress updates are provided throughout the development.",
  },
  {
    q: "What are the payment terms?",
    a: "Flexible plans available. Example (illustrative): Reservation • Contract • Stage payments • Handover. Replace with the developer’s official schedule and incentives.",
  },
  {
    q: "Is there a letting/management service?",
    a: "Yes, end‑to‑end services can be arranged (marketing, guest management, housekeeping, reporting). Choose hands‑free or hybrid depending on your goals.",
  },
];

const Highlight = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3 rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 shadow-sm">
    <Icon className="w-5 h-5" />
    <div>
      <p className="text-xs/4 uppercase tracking-widest text-white/70">{label}</p>
      <p className="text-base text-white font-medium">{value}</p>
    </div>
  </div>
);

const AmenityCard = ({ title, desc, img }) => (
  <motion.div whileHover={{ y: -4 }} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur shadow-sm">
    <div className="aspect-[16/10] overflow-hidden">
      <LazyImage src={img} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
    </div>
    <div className="p-6">
      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <p className="text-white/70 mt-2 text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const Stat = ({ k, v }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
    <p className="text-xs uppercase tracking-widest text-white/60">{k}</p>
    <p className="mt-1 text-white text-lg font-semibold">{v}</p>
  </div>
);

const CTA = () => (
  <div className="hidden md:flex fixed bottom-4 left-4 z-50 flex-col gap-3">
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in Copacabana Coral Reef. Can you send me more information?")}`}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-3 text-sm font-semibold hover:bg-[#20BA5A] transition-all shadow-lg hover:shadow-xl"
    >
      <MessageCircle className="w-5 h-5" /> WhatsApp
    </a>
    <a
      href="tel:{{PHONE_NUMBER}}"
      className="flex items-center gap-2 rounded-full bg-sky-500 text-white px-5 py-3 text-sm font-semibold hover:bg-sky-600 transition-all shadow-lg hover:shadow-xl"
    >
      <Phone className="w-5 h-5" /> Call
    </a>
  </div>
);

export default function CoralReefJomtienPage() {
  const [selectedBeds, setSelectedBeds] = useState("all");
  const [maxBudget, setMaxBudget] = useState(25);
  const [minFloor, setMinFloor] = useState(3);
  const [selectedView, setSelectedView] = useState("all");

  // Track page view on mount
  useEffect(() => {
    fbq('track', 'ViewContent', {
      content_name: 'Coral Reef Jomtien Landing Page',
      content_category: 'Property Listing'
    });
  }, []);

  // Quiz state
  const [widgetDismissed, setWidgetDismissed] = useState(false); // Track if user dismissed widget
  const [quizMinimized, setQuizMinimized] = useState(false); // Controls if minimized to corner
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({
    goal: null,
    priority: null,
    space: null,
    budget: null
  });
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // Investment section email gate
  const [investmentUnlocked, setInvestmentUnlocked] = useState(false);
  const [investmentEmail, setInvestmentEmail] = useState("");

  // Unit plan preview modal (individual apartment interior layouts)
  const [showUnitPlan, setShowUnitPlan] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [unitPlanError, setUnitPlanError] = useState(false);
  const [show3DTour, setShow3DTour] = useState(false);

  // Tower floor plan viewer (complete building floor layouts showing all units)
  const [showTowerFloorPlan, setShowTowerFloorPlan] = useState(false);
  const [selectedFloorNumber, setSelectedFloorNumber] = useState(null);

  // Handle investment email unlock
  const handleInvestmentUnlock = (e) => {
    e.preventDefault();
    if (investmentEmail && investmentEmail.includes('@')) {
      setInvestmentUnlocked(true);
      // Here you can send the email to your CRM/backend
      console.log('Email captured:', investmentEmail);

      // Track email unlock
      fbq('track', 'Lead');
      fbq('trackCustom', 'InvestmentEmailCapture', {
        email: investmentEmail,
        section: 'investment_insights'
      });
    }
  };

  // Recommendation scoring algorithm
  const getRecommendations = () => {
    const { goal, priority, space, budget } = quizAnswers;

    const scored = unitTypes.map(unit => {
      let score = 0;
      let reasons = [];

      // Goal-based scoring
      if (goal === 'investment') {
        if (unit.beds <= 2) score += 30; // 1-2BR best for rentals
        if (unit.beds === 2) score += 10; // 2BR sweet spot
        if (unit.priceFrom < 8) score += 15; // Lower entry = better yield
        reasons.push('High rental demand');
      }
      if (goal === 'holiday') {
        if (unit.view === 'Direct Sea View') score += 40;
        if (unit.floorRange.includes('55')) score += 20;
        reasons.push('Built for enjoyment');
      }
      if (goal === 'flip') {
        if (unit.beds <= 2) score += 25; // Easier to sell
        if (unit.priceFrom < 7) score += 30; // Lower price = more buyers
        if (unit.view === 'Direct Sea View') score += 10;
        reasons.push('Quick turnover potential');
      }
      if (goal === 'relocate') {
        if (unit.beds >= 2) score += 30;
        if (unit.size > 70) score += 20;
        reasons.push('Perfect for living');
      }
      if (goal === 'mixed') {
        if (unit.beds === 2) score += 35;
        if (unit.view === 'Direct Sea View') score += 15;
        reasons.push('Versatile use');
      }

      // Priority-based scoring
      if (priority === 'view') {
        if (unit.view === 'Direct Sea View') score += 50;
        reasons.push('Premium sea views');
      }
      if (priority === 'value') {
        if (unit.priceFrom / unit.size < 0.12) score += 40; // Good price per sqm
        reasons.push('Excellent value');
      }
      if (priority === 'pools') {
        if (unit.floorRange.includes('30') || unit.floorRange.includes('40')) score += 30;
        reasons.push('Near pools');
      }
      if (priority === 'yield') {
        if (unit.beds === 2 && unit.priceFrom < 9) score += 45;
        reasons.push('Strong rental returns');
      }
      if (priority === 'resale') {
        if (unit.beds <= 2 && unit.priceFrom < 8) score += 35;
        reasons.push('Easy to sell');
      }

      // Space-based scoring
      if (space === 'compact' && unit.beds === 1) score += 20;
      if (space === 'spacious' && unit.beds >= 2) score += 20;
      if (space === 'family' && unit.beds === 3) score += 25;

      // Budget-based scoring
      if (budget === 'entry' && unit.priceFrom <= 5) score += 20;
      if (budget === 'mid' && unit.priceFrom > 5 && unit.priceFrom <= 10) score += 20;
      if (budget === 'premium' && unit.priceFrom > 10) score += 20;

      return { ...unit, score, reasons: [...new Set(reasons)] };
    });

    return scored.sort((a, b) => b.score - a.score).slice(0, 3);
  };

  const filteredUnits = unitTypes.filter(unit => {
    const matchesBeds = selectedBeds === "all" || unit.beds === parseInt(selectedBeds);
    const matchesBudget = unit.priceFrom <= maxBudget;
    const matchesView = selectedView === "all" || unit.view === selectedView;

    // Check if selected floor is within unit's floor range
    const [minUnitFloor, maxUnitFloor] = unit.floorRange.split('-').map(Number);
    const matchesFloor = minFloor <= maxUnitFloor;

    return matchesBeds && matchesBudget && matchesView && matchesFloor;
  });

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,255,255,0.25),transparent),linear-gradient(180deg,#020617,60%,#0b1220)] text-white">
      {/* Sticky CTA */}
      <CTA />

      {/* NAV */}
      <header className="sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Copacabana Coral Reef" className="h-9 w-9 rounded-xl object-cover" />
              <span className="font-semibold tracking-wide">Copacabana — Coral Reef</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <a href="#highlights" className="hover:text-white">Highlights</a>
              <a href="#amenities" className="hover:text-white">Amenities</a>
              <a href="#residences" className="hover:text-white">Residences</a>
              <a href="#investment" className="hover:text-white">Investment</a>
              <a href="#location" className="hover:text-white">Location</a>
              <a href="#gallery" className="hover:text-white">Gallery</a>
              <a href="#faq" className="hover:text-white">FAQ</a>
              <a href="#enquire" className="hover:text-white font-semibold">Enquire</a>
            </nav>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </header>

      {/* HERO */}
      <section className="relative h-[72vh] overflow-hidden bg-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <LazyImage
            src="/hero-optimized.jpg"
            alt="Copacabana - Coral Reef Jomtien"
            className="h-full w-full object-cover"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative h-full mx-auto max-w-7xl px-4">
          <div className="h-full flex items-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
              <p className="text-white/80 text-sm tracking-widest uppercase">5 Star Resort Living • Jomtien Beach • Investment</p>
              <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">
                Ready to Find <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-teal-200">Your Unit?</span>
              </h1>
              <p className="mt-5 text-white/80 text-lg">1,897 exclusive beachfront condos • 55 floors • From 3.5M THB (£88K) • Completion Q4 2027</p>

              {/* Urgency Bar */}
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/20 border border-sky-500/30">
                  <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
                  <span className="text-sky-200 font-medium">54% Complete</span>
                </div>
                <div className="text-white/60">
                  <span className="text-white font-semibold">512</span> units already secured
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#residences"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>Find Your Perfect Unit</span>
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in Copacabana Coral Reef. Can you help me?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold hover:bg-white/10 hover:border-white/50 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="#residences"
                  className="hidden inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold hover:bg-white/10 hover:border-white/50 transition-all"
                >
                  Browse All Units
                </a>
              </div>

              <p className="mt-4 text-white/50 text-sm">
                💬 Instant response • Floor plans & 3D tours via WhatsApp
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section id="highlights" className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid md:grid-cols-5 gap-3">
          <Highlight icon={Waves} label="Distance to Beach" value="~2 min walk" />
          <Highlight icon={Trees} label="Green Spaces" value="32 Landscaped Gardens" />
          <Highlight icon={Building2} label="Facilities" value="Infinity & Wave Pools, Gym, Spa" />
          <Highlight icon={Calendar} label="Completion" value="End 2027" />
          <Highlight icon={ShieldCheck} label="Ownership" value="Foreign‑friendly structures" />
        </div>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <Stat k="Starting From" v="3.5M THB" />
          <Stat k="Unit Mix" v="1–3 Bedroom Residences (1,897 units)" />
          <Stat k="Development" v="55‑storey tower" />
        </div>
      </section>

      {/* AMENITIES */}
      <section id="amenities" className="mx-auto max-w-7xl px-4 py-14">
        <div className="md:flex items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold">Experience the Luxury</h2>
            <p className="mt-3 text-white/70">World-class facilities including beach club and ground floor wave pool, kids pool and garden. 6th floor pool with Jacuzzi, Onsen, Sauna and Steam room. Large cantilever pool on the 51st floor with infinity views, pool bar and jacuzzi. 59th floor 25m rooftop floating lap pool. 32 common area gardens, multipurpose sport court, and 24-hour security/concierge service with valet parking and shuttle bus. Mini-Mart, laundry, Spa, Salon and Massage. 5 storey Carpark.</p>
          </div>
          <div className="hidden md:block text-white/60 text-sm">Thoughtfully curated indoor & outdoor experiences</div>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <AmenityCard
            title="6th Floor Coral Pool"
            desc="Stunning coral-themed pool deck with Jacuzzi, authentic Japanese Onsen, sauna and steam room for complete relaxation."
            img="/coral-pool-jacuzzi.jpg"
          />
          <AmenityCard
            title="Sky Pool & Lounge"
            desc="51st floor cantilever pool with infinity views, pool bar and jacuzzi, perfect for sunset swims and relaxation above the city."
            img="/skypool-and-lounge.jpg"
          />
          <AmenityCard
            title="Ground Floor Wave Pool"
            desc="Ground floor wave pool, kids pool and garden with beach club atmosphere, perfect for families and relaxation."
            img="/beachfront pool.jpg"
          />
          <AmenityCard
            title="Premium Fitness Center"
            desc="State-of-the-art 360 SQM gym on 6th floor with panoramic windows, modern equipment, and inspiring ocean views."
            img="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
          />
          <AmenityCard
            title="Beach Club Lounge"
            desc="Exclusive 2,000 sq.m. beach club with sunken bar, drinks, snacks, and sophisticated social spaces."
            img="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80"
          />
          <AmenityCard
            title="Garden Sanctuaries"
            desc="30+ pocket gardens throughout the development, multipurpose sport court, and beautifully landscaped outdoor spaces."
            img="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80"
          />
        </div>
      </section>

      {/* UNIT FINDER TOOL */}
      <section id="residences" className="mx-auto max-w-7xl px-4 py-14">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold">Find Your Perfect Unit</h2>
          <p className="mt-3 text-white/70">With 14 different unit types across 55 floors, we've made it simple. Filter by bedrooms, view type, budget, and floor level to discover your ideal beachfront residence.</p>
        </div>

        {/* Minimized Quiz Button (Bottom Right Corner) */}
        {(widgetDismissed || quizMinimized) && !showRecommendations && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="fixed bottom-24 right-6 z-50 rounded-full bg-gradient-to-r from-sky-500 to-teal-500 text-white px-6 py-4 shadow-2xl hover:shadow-sky-500/50 hover:scale-105 transition-all"
            onClick={() => {
              setWidgetDismissed(false);
              setQuizMinimized(false);
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span className="font-semibold">Help Me Decide</span>
            </div>
          </motion.button>
        )}

        {/* In-Place Help Me Decide Widget */}
        {!widgetDismissed && !showRecommendations && !showQuiz && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-sky-500/10 via-teal-500/10 to-sky-500/10 border-2 border-sky-500/30 backdrop-blur text-center"
          >
            <div className="mb-6">
              <span className="text-6xl mb-4 block">🎯</span>
              <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-sky-200 to-teal-200 bg-clip-text text-transparent">
                Not Sure Which Unit Is Right For You?
              </h3>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Answer 4 quick questions and get personalized recommendations based on your investment goals and lifestyle preferences
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setShowQuiz(true)}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Start Quiz (60 seconds)
              </button>
              <button
                onClick={() => setWidgetDismissed(true)}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all"
              >
                Browse All Unit Types →
              </button>
            </div>

            <p className="text-white/50 text-sm mt-6">
              Skip the quiz anytime - we'll show you all available units
            </p>
          </motion.div>
        )}

        {/* Quiz Interface */}
        {showQuiz && !showRecommendations && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-40 flex items-center justify-center p-4"
            style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(0,0,0,0.7)' }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              className="relative max-w-2xl w-full rounded-2xl bg-gradient-to-br from-slate-900/95 to-slate-800/95 border border-sky-500/20 backdrop-blur-xl shadow-2xl p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setShowQuiz(false);
                  setQuizMinimized(true);
                  setQuizStep(0);
                }}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all group"
              >
                <span className="text-white/60 group-hover:text-white text-xl">×</span>
              </button>
              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-white/60 mb-2">
                  <span>Question {quizStep + 1} of 4</span>
                  <span>{Math.round(((quizStep + 1) / 4) * 100)}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-400 to-teal-400 transition-all duration-300"
                    style={{ width: `${((quizStep + 1) / 4) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question 1: Goal */}
              {quizStep === 0 && (
                <div>
                  <h3 className="text-2xl font-semibold mb-6">What's your main reason for buying?</h3>
                  <div className="grid gap-3">
                    {[
                      { value: 'holiday', icon: '🏖️', label: 'Holiday/vacation home for personal use' },
                      { value: 'investment', icon: '💰', label: 'Investment property for rental income' },
                      { value: 'relocate', icon: '🏠', label: 'Moving to Thailand (primary residence)' },
                      { value: 'mixed', icon: '🔄', label: 'Mix: Personal use + rent it out when away' },
                      { value: 'flip', icon: '📈', label: 'Flip/resell for profit' }
                    ].map(option => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setQuizAnswers({...quizAnswers, goal: option.value});
                          setQuizStep(1);
                        }}
                        className="text-left p-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all"
                      >
                        <span className="text-2xl mr-3">{option.icon}</span>
                        <span className="text-white">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Question 2: Priority */}
              {quizStep === 1 && (
                <div>
                  <h3 className="text-2xl font-semibold mb-6">What matters most to you?</h3>
                  <div className="grid gap-3">
                    {[
                      { value: 'view', icon: '🌊', label: 'Best sea view possible (premium location)' },
                      { value: 'value', icon: '💵', label: 'Best value for money (smart investment)' },
                      { value: 'pools', icon: '🏊', label: 'Close to pools & amenities (lifestyle)' },
                      { value: 'yield', icon: '📈', label: 'Highest rental yield potential' },
                      { value: 'resale', icon: '🎯', label: 'Easy to resell later (liquidity)' }
                    ].map(option => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setQuizAnswers({...quizAnswers, priority: option.value});
                          setQuizStep(2);
                        }}
                        className="text-left p-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all"
                      >
                        <span className="text-2xl mr-3">{option.icon}</span>
                        <span className="text-white">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Question 3: Space */}
              {quizStep === 2 && (
                <div>
                  <h3 className="text-2xl font-semibold mb-6">How much space do you need?</h3>
                  <div className="grid gap-3">
                    {[
                      { value: 'compact', icon: '👤', label: 'Compact is fine (just me or couple)' },
                      { value: 'spacious', icon: '👨‍👩‍👧', label: 'Need space (family, guests, or office)' },
                      { value: 'family', icon: '🎉', label: 'Want room to entertain' }
                    ].map(option => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setQuizAnswers({...quizAnswers, space: option.value});
                          setQuizStep(3);
                        }}
                        className="text-left p-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all"
                      >
                        <span className="text-2xl mr-3">{option.icon}</span>
                        <span className="text-white">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Question 4: Budget */}
              {quizStep === 3 && (
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Your budget comfort zone?</h3>
                  <div className="grid gap-3">
                    {[
                      { value: 'entry', label: 'Entry level (under 5M THB / $130K)' },
                      { value: 'mid', label: 'Mid-range (5-10M THB / $130-260K)' },
                      { value: 'premium', label: 'Premium (10M+ THB / $260K+)' },
                      { value: 'all', label: 'Show me everything' }
                    ].map(option => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setQuizAnswers({...quizAnswers, budget: option.value});
                          setShowRecommendations(true);
                          setShowQuiz(false);

                          // Track quiz completion
                          const finalAnswers = {...quizAnswers, budget: option.value};
                          fbq('trackCustom', 'CompleteQuiz', {
                            goal: finalAnswers.goal,
                            priority: finalAnswers.priority,
                            space: finalAnswers.space,
                            budget: finalAnswers.budget
                          });
                        }}
                        className="text-left p-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all"
                      >
                        <span className="text-white">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Back button */}
              {quizStep > 0 && (
                <button
                  onClick={() => setQuizStep(quizStep - 1)}
                  className="mt-6 text-sm text-white/60 hover:text-white transition"
                >
                  ← Back
                </button>
              )}

              {/* Skip button */}
              <button
                onClick={() => {
                  setShowQuiz(false);
                  setWidgetDismissed(true);
                  setQuizStep(0);
                  setQuizAnswers({ goal: null, priority: null, space: null, budget: null });
                }}
                className="block mx-auto mt-6 text-sm text-white/40 hover:text-white/60 transition"
              >
                Skip quiz and show all units
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Recommendations */}
        {showRecommendations && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold">✨ Your Personalized Recommendations</h3>
              <p className="text-white/60 text-sm mt-2">Based on your goals, here are the best units for you</p>
              <button
                onClick={() => {
                  setShowRecommendations(false);
                  setShowQuiz(true);
                  setQuizStep(0);
                  setQuizAnswers({ goal: null, priority: null, space: null, budget: null });
                }}
                className="mt-3 text-sm text-sky-400 hover:text-sky-300 underline transition"
              >
                Retake quiz
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {getRecommendations().map((unit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden border-2 border-sky-500/30 bg-gradient-to-br from-sky-500/10 to-teal-500/10 backdrop-blur"
                >
                  <div className="bg-gradient-to-r from-sky-500/20 to-teal-500/20 px-4 py-2 text-center">
                    <span className="text-sm font-semibold">⭐ {i === 0 ? 'Top Pick' : `#${i + 1} Choice`}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold">{unit.type}</h3>
                      <div className="text-xs px-2 py-1 rounded-full bg-sky-500/20 text-sky-200">{unit.beds} bed</div>
                    </div>
                    <div className="mb-3 flex gap-2 flex-wrap">
                      <div className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${unit.view === "Direct Sea View" ? "bg-blue-500/20 text-blue-200" : "bg-teal-500/20 text-teal-200"}`}>
                        <Waves className="w-3 h-3" />
                        {unit.view}
                      </div>
                      <div className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-200">
                        <Building2 className="w-3 h-3" />
                        Floors {unit.floorRange}
                      </div>
                    </div>
                    <div className="mb-4 p-3 rounded-lg bg-black/20 border border-white/10">
                      <p className="text-sm font-medium text-sky-200 mb-1">💡 Why this is perfect for you:</p>
                      <p className="text-xs text-white/70 leading-relaxed">
                        {unit.reasons.join(', ')}. Size: {unit.size}m² offers {unit.beds === 1 ? 'efficient use of space' : unit.beds === 2 ? 'versatile layout' : 'generous room for all'}.
                        {unit.view === 'Direct Sea View' ? ' Premium direct sea views.' : ' Great sea views.'}
                      </p>
                    </div>
                    <div className="space-y-2 text-sm text-white/70 mb-4">
                      <div className="flex justify-between">
                        <span>Size:</span>
                        <span className="text-white font-medium">{unit.size} m²</span>
                      </div>
                      <div className="flex justify-between">
                        <span>From:</span>
                        <span className="text-white font-medium">{unit.priceFrom}M THB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>GBP:</span>
                        <span className="text-white/60">~£{unit.priceGBP}K</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <button
                        onClick={() => {
                          setSelectedUnit(unit);
                          setShowUnitPlan(true);
                          setUnitPlanError(false);
                          fbq('trackCustom', 'ViewFloorPlan', {
                            unit_type: unit.type,
                            price_thb: unit.priceFrom * 1000000,
                            price_usd: unit.priceUSD * 1000,
                            bedrooms: unit.beds,
                            size_sqm: unit.size,
                            view_type: unit.view,
                            source: 'quiz_recommendations'
                          });
                        }}
                        className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 transition-all duration-300 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span>View Unit Layout & 3D Tour</span>
                        </div>
                      </button>
                      <a
                        href={getWhatsAppLink(unit)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          fbq('track', 'Contact');
                          fbq('trackCustom', 'WhatsAppClick', {
                            unit_type: unit.type,
                            price_thb: unit.priceFrom * 1000000,
                            price_usd: unit.priceUSD * 1000,
                            bedrooms: unit.beds,
                            source: 'quiz_recommendations'
                          });
                        }}
                        className="block text-center py-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20BA5A] hover:to-[#0F7A6A] transition-all duration-300 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <MessageCircle className="w-4 h-4" />
                          <span>Get Pricing via WhatsApp</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mb-8">
              <p className="text-white/60 text-sm">Want to see more options? Use the filters below to explore all {filteredUnits.length} matching units</p>
            </div>
          </motion.div>
        )}

        {/* Filters - hide while quiz is active */}
        {!showQuiz && (
          <>
            {/* Primary Filters */}
            <div className="grid md:grid-cols-3 gap-4 mb-4 p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <div>
                <label className="text-sm text-white/70 mb-2 block">Bedrooms</label>
                <select
                  value={selectedBeds}
                  onChange={(e) => {
                    setSelectedBeds(e.target.value);
                    fbq('trackCustom', 'FilterUsage', {
                      filter_type: 'bedrooms',
                      filter_value: e.target.value
                    });
                  }}
                  className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3 outline-none focus:border-white/40"
                >
                  <option value="all">All Bedrooms</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-white/70 mb-2 block">View Type</label>
                <select
                  value={selectedView}
                  onChange={(e) => {
                    setSelectedView(e.target.value);
                    fbq('trackCustom', 'FilterUsage', {
                      filter_type: 'view_type',
                      filter_value: e.target.value
                    });
                  }}
                  className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3 outline-none focus:border-white/40"
                >
                  <option value="all">All Views</option>
                  <option value="Direct Sea View">Direct Sea View</option>
                  <option value="Sea View">Sea View</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-white/70 mb-2 block">Max Budget: {maxBudget}M THB (${Math.round(maxBudget * 25.7)}K USD)</label>
                <input
                  type="range"
                  min="3"
                  max="25"
                  step="0.5"
                  value={maxBudget}
                  onChange={(e) => {
                    const newBudget = parseFloat(e.target.value);
                    setMaxBudget(newBudget);
                    fbq('trackCustom', 'FilterUsage', {
                      filter_type: 'budget',
                      filter_value: newBudget,
                      filter_value_usd: Math.round(newBudget * 25.7)
                    });
                  }}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Advanced Filters (Collapsible) */}
            <div className="mb-8">
              <button
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className="text-sm text-white/60 hover:text-white/90 transition-colors flex items-center gap-2 mb-4"
              >
                <span>Advanced Filters</span>
                <svg
                  className={`w-4 h-4 transition-transform ${showAdvancedFilters ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showAdvancedFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10"
                >
                  <div>
                    <label className="text-sm text-white/70 mb-2 block">
                      Floor Level: {minFloor}+
                      {minFloor >= 30 && minFloor < 40 && <span className="text-sky-300 ml-1">• Pool at 30</span>}
                      {minFloor >= 40 && minFloor < 59 && <span className="text-sky-300 ml-1">• Pool at 40</span>}
                      {minFloor >= 59 && <span className="text-sky-300 ml-1">• Rooftop Pool</span>}
                    </label>
                    <input
                      type="range"
                      min="3"
                      max="55"
                      step="1"
                      value={minFloor}
                      onChange={(e) => {
                        const newFloor = parseInt(e.target.value);
                        setMinFloor(newFloor);
                        fbq('trackCustom', 'FilterUsage', {
                          filter_type: 'floor_level',
                          filter_value: newFloor
                        });
                      }}
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-white/50 mt-1 mb-3">
                      <span>Floor 3</span>
                      <span>Floor 55</span>
                    </div>

                    {/* Pool Floor Markers */}
                    <div className="flex justify-between items-center px-1 mb-3">
                      <div className="text-xs text-white/40">Pool Floors:</div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setMinFloor(30)}
                          className="px-2 py-1 rounded text-xs bg-sky-500/20 text-sky-300 hover:bg-sky-500/30 transition-colors"
                        >
                          30 🏊
                        </button>
                        <button
                          onClick={() => setMinFloor(40)}
                          className="px-2 py-1 rounded text-xs bg-sky-500/20 text-sky-300 hover:bg-sky-500/30 transition-colors"
                        >
                          40 🌅
                        </button>
                        <button
                          onClick={() => setMinFloor(59)}
                          className="px-2 py-1 rounded text-xs bg-sky-500/20 text-sky-300 hover:bg-sky-500/30 transition-colors"
                        >
                          59 🏖️
                        </button>
                      </div>
                    </div>

                    {/* View Floor Layout Button */}
                    {towerFloorPlanMapping[minFloor] && (
                      <button
                        onClick={() => {
                          setSelectedFloorNumber(minFloor);
                          setShowTowerFloorPlan(true);
                          fbq('trackCustom', 'ViewTowerFloorPlan', {
                            floor_number: minFloor
                          });
                        }}
                        className="mt-3 w-full text-center py-2 rounded-lg bg-gradient-to-r from-teal-500/20 to-sky-500/20 border border-teal-500/30 hover:from-teal-500/30 hover:to-sky-500/30 hover:border-teal-500/50 transition-all duration-200 text-sm font-medium text-teal-200"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <span>View Floor {minFloor} Layout {minFloor === 30 ? '🏊' : minFloor === 40 ? '🌅' : minFloor === 59 ? '🏖️' : ''}</span>
                        </div>
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          </>
        )}

        {/* Conditionally show units grid only after widget is dismissed or quiz is completed */}
        {(widgetDismissed || showRecommendations) && (
          <>
            {/* Results */}
            <div className="mb-4 text-white/60 text-sm">
              {filteredUnits.length} {filteredUnits.length === 1 ? 'unit' : 'units'} match your criteria
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredUnits.map((unit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
                >
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold">{unit.type}</h3>
                      <div className="text-xs px-2 py-1 rounded-full bg-sky-500/20 text-sky-200">{unit.beds} bed</div>
                    </div>
                    <div className="mb-3 flex gap-2 flex-wrap">
                      <div className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${unit.view === "Direct Sea View" ? "bg-blue-500/20 text-blue-200" : "bg-teal-500/20 text-teal-200"}`}>
                        <Waves className="w-3 h-3" />
                        {unit.view}
                      </div>
                      <div className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-200">
                        <Building2 className="w-3 h-3" />
                        Floors {unit.floorRange}
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-white/70">
                      <div className="flex justify-between">
                        <span>Size:</span>
                        <span className="text-white font-medium">{unit.size} m²</span>
                      </div>
                      <div className="flex justify-between">
                        <span>From:</span>
                        <span className="text-white font-medium">{unit.priceFrom}M THB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>GBP:</span>
                        <span className="text-white/60">~£{unit.priceGBP}K</span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedUnit(unit);
                        setShowUnitPlan(true);
                        setUnitPlanError(false);
                        // Track floor plan view
                        fbq('trackCustom', 'ViewFloorPlan', {
                          unit_type: unit.type,
                          price_thb: unit.priceFrom * 1000000,
                          price_usd: unit.priceUSD * 1000,
                          bedrooms: unit.beds,
                          size_sqm: unit.size,
                          view_type: unit.view
                        });
                      }}
                      className="mt-4 w-full py-3 rounded-xl border-2 border-sky-500/30 bg-sky-500/10 hover:bg-sky-500/20 hover:border-sky-500/50 transition-all text-sm font-semibold text-white"
                    >
                      Preview Floor Plan →
                    </button>
                    <a
                      href={getWhatsAppLink(unit)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 block text-center py-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20BA5A] hover:to-[#0F7A6A] transition-all duration-300 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        <span>Request Full Details</span>
                      </div>
                      <div className="text-xs font-normal text-white/80 mt-0.5">Floor plan + 3D tour via WhatsApp</div>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredUnits.length === 0 && (
              <div className="text-center py-12 text-white/60">
                <p>No units match your criteria. Try adjusting your filters.</p>
              </div>
            )}
          </>
        )}
      </section>

      {/* DEVELOPER TRUST SECTION */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur p-8 md:p-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <img
                src="https://copacabanagroup.com/wp-content/uploads/2022/10/star.png"
                alt="5 Star"
                className="h-4 opacity-80"
              />
              <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">Award-Winning Developer</span>
              <img
                src="https://copacabanagroup.com/wp-content/uploads/2022/10/star.png"
                alt="5 Star"
                className="h-4 opacity-80"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Built by <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-teal-200">Copacabana Group</span>
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              With over 20 years of experience in Pattaya's real estate market, Copacabana Group has earned its reputation as a leader in luxury beachfront development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="text-4xl font-bold text-sky-400 mb-2">20+</div>
              <div className="text-white/60 text-sm">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">7</div>
              <div className="text-white/60 text-sm">Major Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">3,500+</div>
              <div className="text-white/60 text-sm">Satisfied Investors</div>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4 text-center">Previously Developed & Represented</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              {[
                'Copacabana Beach Jomtien (Award-Winning Flagship)',
                'Riviera Jomtien',
                'Riviera Wong Amat',
                'Venetian Jomtien',
                'Grande Caribbean Jomtien',
                'Atlantis Jomtien',
                'Seven Seas Jomtien'
              ].map((project, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                  <svg className="w-4 h-4 text-teal-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80">{project}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-white/60 text-sm mb-6">Trusted by leading organizations and financial institutions</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {[1, 2, 3, 4, 5, 6].map(num => (
                <img
                  key={num}
                  src={`https://copacabanagroup.com/wp-content/uploads/2022/10/client-${num}.png`}
                  alt={`Partner ${num}`}
                  className="h-12 object-contain hover:scale-110 transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section id="investment" className="mx-auto max-w-7xl px-4 py-14 relative">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold">Investment Numbers That Matter</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Pre-construction pricing with projected rental yields and capital appreciation. Here's what the data shows.</p>
        </div>

        {/* Investment Content - Blurred if not unlocked */}
        <div className={`relative ${!investmentUnlocked ? 'select-none pointer-events-none' : ''}`}>
          <div className={!investmentUnlocked ? 'blur-md' : ''}>
            {/* Key Metrics Grid */}
            <div className="grid md:grid-cols-4 gap-4 mb-10">
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6 backdrop-blur">
            <div className="text-emerald-400 text-sm font-medium mb-1">Projected NET Yield</div>
            <div className="text-3xl font-bold text-white">6-8%</div>
            <div className="text-white/60 text-xs mt-2">Annual rental return after costs</div>
          </div>
          <div className="rounded-2xl border border-sky-500/20 bg-sky-500/10 p-6 backdrop-blur">
            <div className="text-sky-400 text-sm font-medium mb-1">Pre-Construction Discount</div>
            <div className="text-3xl font-bold text-white">15-20%</div>
            <div className="text-white/60 text-xs mt-2">Below estimated completion value</div>
          </div>
          <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-6 backdrop-blur">
            <div className="text-purple-400 text-sm font-medium mb-1">Occupancy Rate</div>
            <div className="text-3xl font-bold text-white">75-85%</div>
            <div className="text-white/60 text-xs mt-2">Jomtien beachfront average</div>
          </div>
          <div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 p-6 backdrop-blur">
            <div className="text-orange-400 text-sm font-medium mb-1">Break-Even Timeline</div>
            <div className="text-3xl font-bold text-white">12-15yr</div>
            <div className="text-white/60 text-xs mt-2">Conservative estimate</div>
          </div>
        </div>

        {/* ROI Example Comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Example 1: Budget Investor */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Budget Entry: Type 4 (1BR)</h3>
                <p className="text-sm text-white/60">Best for: First-time investors, flippers</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-medium">Popular</div>
            </div>
            <div className="space-y-3 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-white/70">Purchase Price:</span>
                <span className="text-white font-semibold">3.7M THB ($95K USD)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Projected Rent/Month:</span>
                <span className="text-white font-semibold">22-26K THB ($570-670)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Annual Gross Income:</span>
                <span className="text-white font-semibold">264-312K THB ($6,800-8,000)</span>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-3">
                <span className="text-emerald-400 font-medium">NET Yield (after costs):</span>
                <span className="text-emerald-400 font-bold text-lg">~7.1%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Completion Value Est:</span>
                <span className="text-white font-semibold">4.4-4.6M THB (+19-24%)</span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-black/30 border border-white/10">
              <p className="text-xs text-white/70">💡 <strong className="text-white">Why this works:</strong> Low entry, high rental demand for 1BR, easy to furnish (~200K THB), fastest to flip.</p>
            </div>
          </div>

          {/* Example 2: Serious Investor */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Premium Play: Type 19 (2BR)</h3>
                <p className="text-sm text-white/60">Best for: Long-term hold, lifestyle + rental</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium">Direct Sea View</div>
            </div>
            <div className="space-y-3 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-white/70">Purchase Price:</span>
                <span className="text-white font-semibold">7.7M THB ($198K USD)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Projected Rent/Month:</span>
                <span className="text-white font-semibold">40-48K THB ($1,030-1,235)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Annual Gross Income:</span>
                <span className="text-white font-semibold">480-576K THB ($12,350-14,820)</span>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-3">
                <span className="text-emerald-400 font-medium">NET Yield (after costs):</span>
                <span className="text-emerald-400 font-bold text-lg">~6.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Completion Value Est:</span>
                <span className="text-white font-semibold">9.2-9.6M THB (+19-25%)</span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-black/30 border border-white/10">
              <p className="text-xs text-white/70">💡 <strong className="text-white">Why this works:</strong> Direct sea view premium, 2BR attracts families, higher quality tenants, strong resale appeal.</p>
            </div>
          </div>
        </div>

        {/* Payment Structure */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur mb-10">
          <h3 className="text-xl font-semibold mb-6 text-center">Typical Payment Structure</h3>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-sky-500/20 flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl font-bold text-sky-300">1</span>
                </div>
                <div className="text-sm font-medium text-white mb-1">Reservation</div>
                <div className="text-lg font-bold text-sky-300">50K THB</div>
                <div className="text-xs text-white/60 mt-1">Secures unit</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl font-bold text-teal-300">2</span>
                </div>
                <div className="text-sm font-medium text-white mb-1">Contract (30 days)</div>
                <div className="text-lg font-bold text-teal-300">30%</div>
                <div className="text-xs text-white/60 mt-1">Minus reservation</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl font-bold text-purple-300">3</span>
                </div>
                <div className="text-sm font-medium text-white mb-1">Construction</div>
                <div className="text-lg font-bold text-purple-300">40%</div>
                <div className="text-xs text-white/60 mt-1">Staged payments</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl font-bold text-emerald-300">4</span>
                </div>
                <div className="text-sm font-medium text-white mb-1">Completion (Q4 2027)</div>
                <div className="text-lg font-bold text-emerald-300">30%</div>
                <div className="text-xs text-white/60 mt-1">Or finance available</div>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-sky-500/10 border border-sky-500/20">
              <p className="text-sm text-white/80 text-center">
                <strong className="text-sky-300">Example:</strong> 4M THB unit = 50K deposit + 1.15M in 30 days + 1.6M during construction + 1.2M at handover
              </p>
            </div>
          </div>
        </div>

        {/* Risk Factors & Management */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              What's Included
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Full property management service available (10-15% of rental income)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Furniture packages, white goods, air conditioning and TVs included in unit price</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Marketing on Airbnb, Booking.com, Agoda handled by management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Guest vetting, check-in/out, cleaning, maintenance included</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Legal support for foreign ownership structure (freehold or leasehold)</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="text-orange-400">⚠️</span>
              Key Considerations
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Construction delays possible (currently on track, 54% complete)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Rental yields depend on occupancy, management quality, and market conditions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Currency fluctuation risk (THB/USD/GBP exchange rates)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Thailand property tax, maintenance fees (~35-50 THB/sqm/month)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Exit liquidity: Resale market depends on economic conditions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-white/70 mb-4">Want a personalized ROI projection for your budget and goals?</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like a personalized ROI projection. My budget is [amount] and I'm interested in [rental income/capital growth/both].")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <LineChart className="w-5 h-5" />
            Get Custom Investment Report
          </a>
        </div>

          </div>
        </div>

        {/* Email Gate Overlay */}
        {!investmentUnlocked && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-slate-900/98 to-slate-800/98 border-2 border-emerald-500/30 rounded-3xl p-8 md:p-12 max-w-lg mx-4 shadow-2xl shadow-emerald-500/20 backdrop-blur-xl"
            >
              <div className="text-center">
                <div className="mb-4">
                  <span className="text-5xl">📊</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
                  Unlock Investment Analysis
                </h3>
                <p className="text-white/70 mb-6">
                  Get instant access to detailed ROI projections, rental yield calculations, payment structures, and real investment examples.
                </p>

                <form onSubmit={handleInvestmentUnlock} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={investmentEmail}
                      onChange={(e) => setInvestmentEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full rounded-xl border border-white/20 bg-black/30 px-6 py-4 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 text-white placeholder-white/40 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                  >
                    Unlock Investment Data →
                  </button>
                </form>

                <p className="text-xs text-white/40 mt-4">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </section>

      {/* LOCATION */}
      <section id="location" className="mx-auto max-w-7xl px-4 py-14">
        <div className="md:flex items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-white via-sky-200 to-white/60 bg-clip-text text-transparent">Jomtien — Calm, Connected, Coastal</h2>
            <p className="mt-3 text-white/70">Located just moments from Jomtien Beach and the popular Night Market, with a relaxed, family‑friendly vibe yet close to Pattaya's vibrant nightlife, dining and shopping.</p>
          </div>
          <div className="hidden md:block">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-500/20 to-blue-500/20 border border-sky-500/30 text-sky-300 text-sm font-medium">
              <MapPin className="w-4 h-4" />
              Everything you need, moments away
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="group p-6 rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/20 hover:border-sky-500/40 transition-all shadow-lg hover:shadow-xl backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-sky-500/20 group-hover:bg-sky-500/30 transition-colors">
                <MapPin className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Jomtien Beach</h3>
                <p className="text-sm text-white/60">Short walk</p>
              </div>
            </div>
          </div>
          <div className="group p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all shadow-lg hover:shadow-xl backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Night Market</h3>
                <p className="text-sm text-white/60">Walking distance</p>
              </div>
            </div>
          </div>
          <div className="group p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:border-orange-500/40 transition-all shadow-lg hover:shadow-xl backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-orange-500/20 group-hover:bg-orange-500/30 transition-colors">
                <MapPin className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Pattaya City</h3>
                <p className="text-sm text-white/60">Close proximity</p>
              </div>
            </div>
          </div>
        </div>
        {/* Google Maps Embed - Jomtien 2nd Road Location */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7755.5!2d100.8874!3d12.8797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUyJzQ2LjkiTiAxMDDCsDUzJzE0LjYiRQ!5e1!3m2!1sen!2sth!4v1699000000000!5m2!1sen!2sth"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Copacabana Coral Reef Location - Jomtien Beach"
          />
        </div>
      </section>

      {/* GALLERY */}
      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-14">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Frequently Asked Questions</h2>
          <p className="mt-3 text-white/60 max-w-2xl mx-auto">Everything you need to know about Copacabana Coral Reef</p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-sm hover:border-white/20 transition-all shadow-lg hover:shadow-xl">
              <summary className="cursor-pointer list-none text-lg font-semibold flex items-start justify-between">
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">{f.q}</span>
                <span className="ml-4 text-sky-400 group-open:rotate-45 transition-transform duration-300 text-2xl">+</span>
              </summary>
              <p className="mt-4 text-white/70 text-sm leading-relaxed pl-2 border-l-2 border-sky-500/30">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-16">
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#25D366]/10 via-sky-500/5 to-white/5 p-12 md:p-16 backdrop-blur shadow-2xl overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/5 via-transparent to-sky-500/5 pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-sky-200 to-white bg-clip-text text-transparent mb-4">
              Ready to Secure Your Beachfront Investment?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Chat with our team on WhatsApp for instant answers, floor plans, pricing, and exclusive pre-construction offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in Copacabana Coral Reef. Please send me the latest floor plans, pricing, and payment terms.")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  fbq('track', 'Contact');
                  fbq('trackCustom', 'WhatsAppClick', {
                    source: 'final_cta'
                  });
                }}
                className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20BA5A] hover:to-[#0F7A6A] transition-all text-lg font-bold text-white shadow-2xl hover:shadow-3xl hover:scale-105 transform"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Chat on WhatsApp Now</span>
              </a>
              <a
                href="tel:{{PHONE_NUMBER}}"
                className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl border-2 border-white/30 hover:bg-white/10 transition-all text-lg font-semibold text-white"
              >
                <Phone className="w-6 h-6" />
                <span>Call Our Team</span>
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 rounded-xl bg-sky-500/20">
                  <ShieldCheck className="w-6 h-6 text-sky-400" />
                </div>
                <p className="text-sm text-white/70"><strong className="text-white">UK & Thailand Teams</strong><br/>Local expertise + on-ground support</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 rounded-xl bg-purple-500/20">
                  <Award className="w-6 h-6 text-purple-400" />
                </div>
                <p className="text-sm text-white/70"><strong className="text-white">Secure Process</strong><br/>Independent legal guidance included</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 rounded-xl bg-orange-500/20">
                  <TrendingUp className="w-6 h-6 text-orange-400" />
                </div>
                <p className="text-sm text-white/70"><strong className="text-white">After-Sales Care</strong><br/>Lettings & property management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-16 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10">
          {/* Disclaimer */}
          <div className="mb-8 p-6 rounded-xl bg-white/5 border border-white/10">
            <p className="text-xs text-white/50 leading-relaxed">
              <strong className="text-white/70">Important Disclaimer:</strong> All information, images, floor plans, prices, and specifications are indicative only and subject to change without notice. Prices shown are starting prices and may vary based on unit type, floor level, and view. Artist renderings and 3D tours are conceptual representations and may differ from the final product. This website is for informational purposes only and does not constitute an offer, invitation to purchase, or investment advice. All property purchases are subject to contract terms, availability, and developer approval. Past performance is not indicative of future results. Rental yields and capital appreciation projections are estimates only and not guaranteed. Properties Thailand acts as an introducer and is not the developer. Independent legal and financial advice is strongly recommended before making any property investment. Property investment carries risk, and you may not get back the amount you invest. Foreign ownership restrictions may apply under Thai law. All measurements are approximate. E&OE.
            </p>
          </div>

          <div className="md:flex items-center justify-between gap-6 text-sm text-white/60">
            <p>© {new Date().getFullYear()} Properties Thailand • Copacabana - Coral Reef Jomtien</p>
            <div className="flex flex-wrap items-center gap-4 mt-4 md:mt-0">
              <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="https://copacabanagroup.com/en/contact-us/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Developer Contact</a>
            </div>
          </div>
        </div>
      </footer>
      {/* FLOOR PLAN PREVIEW MODAL */}
      {showUnitPlan && selectedUnit && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm overflow-y-auto p-4 md:p-6"
          onClick={() => setShowUnitPlan(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="relative max-w-5xl w-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-white/20 shadow-2xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowUnitPlan(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur flex items-center justify-center transition-all"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
              {/* Left: Unit Layout Image */}
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-white">{selectedUnit.type} Unit Layout</h3>
                <div className="relative rounded-xl overflow-hidden border border-white/20 bg-white min-h-[300px] md:min-h-[400px]">
                  {!unitPlanError ? (
                    <img
                      src={unitPlanMapping[selectedUnit.type] || `/floorplans/type-${selectedUnit.type.replace('Type ', '').toLowerCase()}.jpg`}
                      alt={`${selectedUnit.type} unit layout`}
                      className="w-full h-auto"
                      onError={() => setUnitPlanError(true)}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                      <div className="text-center p-8">
                        <svg className="w-16 h-16 text-white/20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p className="text-white/60 text-lg font-medium mb-2">Unit Layout Available via WhatsApp</p>
                        <p className="text-white/40 text-sm">Request high-resolution unit layouts, 3D tours, and detailed specifications</p>
                      </div>
                    </div>
                  )}
                </div>
                <p className="text-white/50 text-xs mt-2 text-center">
                  {unitPlanError ? 'Contact us for complete unit layout documentation' : 'Unit layout for illustration purposes. Details may vary.'}
                </p>
              </div>

              {/* Right: Unit Details */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="mb-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-sky-500/20 text-sky-200 text-sm mb-3">
                      {selectedUnit.beds} Bedroom
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedUnit.type}</h2>
                    <p className="text-white/70 text-lg">{selectedUnit.size} m² • {selectedUnit.view}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-3 border-b border-white/10">
                      <span className="text-white/60">Size:</span>
                      <span className="text-white font-semibold">{selectedUnit.size} m²</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-white/10">
                      <span className="text-white/60">Bedrooms:</span>
                      <span className="text-white font-semibold">{selectedUnit.beds} BR</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-white/10">
                      <span className="text-white/60">View Type:</span>
                      <span className="text-white font-semibold">{selectedUnit.view}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-white/10">
                      <span className="text-white/60">Floor Range:</span>
                      <span className="text-white font-semibold">Floors {selectedUnit.floorRange}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-white/10">
                      <span className="text-white/60">Price From:</span>
                      <span className="text-white font-semibold">{selectedUnit.priceFrom}M THB (~${selectedUnit.priceUSD}K USD)</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-4 mb-6">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1 a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <div className="text-sm">
                        <p className="text-white/80 font-medium mb-1">Get High-Resolution Unit Layouts</p>
                        <p className="text-white/60">Request detailed unit layouts, 3D tours, and availability via WhatsApp</p>
                      </div>
                    </div>
                  </div>

                  {/* Smart Floor Requests */}
                  <div className="bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border border-sky-500/20 rounded-xl p-4 mb-6">
                    <p className="text-sm font-medium text-white/90 mb-3">💬 Ask about specific floors:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {(() => {
                        const [minFloor, maxFloor] = selectedUnit.floorRange.split('-').map(Number);
                        const smartFloors = [];

                        // Add pool floors if available in range
                        if (30 >= minFloor && 30 <= maxFloor) {
                          const context = getFloorContext(30);
                          smartFloors.push({ floor: 30, ...context });
                        }
                        if (40 >= minFloor && 40 <= maxFloor) {
                          const context = getFloorContext(40);
                          smartFloors.push({ floor: 40, ...context });
                        }
                        if (59 >= minFloor && 59 <= maxFloor) {
                          const context = getFloorContext(59);
                          smartFloors.push({ floor: 59, ...context });
                        }

                        // Add top floor
                        const topFloor = maxFloor;
                        if (topFloor >= 50 && !smartFloors.find(f => f.floor === topFloor)) {
                          const context = getFloorContext(topFloor);
                          smartFloors.push({ floor: topFloor, ...context });
                        }

                        // Add mid-range floor if we have less than 3 options
                        if (smartFloors.length < 3 && maxFloor - minFloor > 10) {
                          const midFloor = Math.floor((minFloor + maxFloor) / 2);
                          const context = getFloorContext(midFloor);
                          smartFloors.push({ floor: midFloor, ...context });
                        }

                        return smartFloors.slice(0, 4).map(({ floor, emoji, label }) => (
                          <a
                            key={floor}
                            href={getSmartFloorWhatsApp(selectedUnit, floor, label)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                              fbq('track', 'Contact');
                              fbq('trackCustom', 'SmartFloorRequest', {
                                unit_type: selectedUnit.type,
                                floor: floor,
                                floor_context: label
                              });
                            }}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-400/50 transition-all text-sm text-white/90 hover:text-white"
                          >
                            <span className="text-lg">{emoji}</span>
                            <span className="font-medium">Floor {floor}</span>
                          </a>
                        ));
                      })()}
                    </div>
                    <p className="text-xs text-white/50 mt-2">Tap to request tower floor plan via WhatsApp</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  {selectedUnit.tour3D && (
                    <button
                      onClick={() => {
                        setShow3DTour(true);
                        fbq('trackCustom', 'View3DTour', {
                          unit_type: selectedUnit.type,
                          price_thb: selectedUnit.priceFrom * 1000000,
                          bedrooms: selectedUnit.beds
                        });
                      }}
                      className="w-full text-center py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all text-base font-semibold text-white shadow-lg hover:shadow-xl"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>View 3D Virtual Tour</span>
                      </div>
                    </button>
                  )}
                  <a
                    href={getWhatsAppLink(selectedUnit)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      fbq('track', 'Contact');
                      fbq('trackCustom', 'WhatsAppClick', {
                        unit_type: selectedUnit.type,
                        price_thb: selectedUnit.priceFrom * 1000000,
                        price_usd: selectedUnit.priceUSD * 1000,
                        bedrooms: selectedUnit.beds,
                        source: 'floor_plan_modal'
                      });
                    }}
                    className="block text-center py-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20BA5A] hover:to-[#0F7A6A] transition-all text-base font-semibold text-white shadow-lg hover:shadow-xl"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      <span>Request Pricing & Availability</span>
                    </div>
                  </a>
                  <button
                    onClick={() => setShowUnitPlan(false)}
                    className="w-full py-3 rounded-xl border border-white/20 hover:bg-white/5 transition-all text-white/80 hover:text-white"
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* 3D Tour Modal */}
      {show3DTour && selectedUnit && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShow3DTour(false)}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-7xl bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h2 className="text-2xl font-bold text-white">{selectedUnit.type} - 3D Virtual Tour</h2>
                <p className="text-white/60 mt-1">Navigate using your mouse or touch screen</p>
              </div>
              <button
                onClick={() => setShow3DTour(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* 3D Tour iframe */}
            <div className="relative bg-black" style={{ height: '80vh' }}>
              <iframe
                src={selectedUnit.tour3D}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                allow="xr-spatial-tracking"
              />
            </div>

            {/* Footer CTA */}
            <div className="p-6 border-t border-white/10 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
              <div className="flex gap-4">
                <a
                  href={getWhatsAppLink(selectedUnit)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    fbq('track', 'Contact');
                    fbq('trackCustom', 'WhatsAppClick', {
                      unit_type: selectedUnit.type,
                      price_thb: selectedUnit.priceFrom * 1000000,
                      price_usd: selectedUnit.priceUSD * 1000,
                      bedrooms: selectedUnit.beds,
                      source: '3d_tour_modal'
                    });
                  }}
                  className="flex-1 text-center py-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20BA5A] hover:to-[#0F7A6A] transition-all text-base font-semibold text-white shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>Request Pricing & Availability</span>
                  </div>
                </a>
                <button
                  onClick={() => setShow3DTour(false)}
                  className="px-6 py-4 rounded-xl border border-white/20 hover:bg-white/5 transition-all text-white/80 hover:text-white"
                >
                  Close Tour
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Tower Floor Plan Modal */}
      {showTowerFloorPlan && selectedFloorNumber && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowTowerFloorPlan(false)}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full max-h-[90vh] overflow-auto rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/20 shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-white/10 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur">
              <div>
                <h3 className="text-2xl font-bold text-white">Floor {selectedFloorNumber} Layout</h3>
                <p className="text-white/60 text-sm mt-1">Complete tower floor plan showing all unit positions</p>
              </div>
              <button
                onClick={() => setShowTowerFloorPlan(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
              >
                <span className="text-white/80 hover:text-white text-2xl leading-none">×</span>
              </button>
            </div>

            {/* Floor Plan Image */}
            <div className="p-6">
              <div className="relative rounded-xl overflow-hidden border border-white/20 bg-white">
                <img
                  src={towerFloorPlanMapping[selectedFloorNumber]}
                  alt={`Floor ${selectedFloorNumber} layout`}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Floor Navigation */}
            <div className="p-6 border-t border-white/10 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
              <div className="flex items-center justify-between gap-4 mb-4">
                <button
                  onClick={() => {
                    let prevFloor = selectedFloorNumber - 1;
                    while (prevFloor >= 5 && !towerFloorPlanMapping[prevFloor]) {
                      prevFloor--;
                    }
                    if (towerFloorPlanMapping[prevFloor]) {
                      setSelectedFloorNumber(prevFloor);
                      setMinFloor(prevFloor);
                    }
                  }}
                  disabled={selectedFloorNumber <= 5}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-white"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Previous Floor</span>
                </button>
                <span className="text-white/60 text-sm">Floor {selectedFloorNumber} of 54</span>
                <button
                  onClick={() => {
                    let nextFloor = selectedFloorNumber + 1;
                    while (nextFloor <= 54 && !towerFloorPlanMapping[nextFloor]) {
                      nextFloor++;
                    }
                    if (towerFloorPlanMapping[nextFloor]) {
                      setSelectedFloorNumber(nextFloor);
                      setMinFloor(nextFloor);
                    }
                  }}
                  disabled={selectedFloorNumber >= 54}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-white"
                >
                  <span>Next Floor</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I'm interested in units on Floor ${selectedFloorNumber}. Can you tell me which units are available?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  fbq('track', 'Contact');
                  fbq('trackCustom', 'WhatsAppClick', {
                    floor_number: selectedFloorNumber,
                    source: 'tower_floor_plan_modal'
                  });
                }}
                className="block text-center py-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20BA5A] hover:to-[#0F7A6A] transition-all text-base font-semibold text-white shadow-lg hover:shadow-xl"
              >
                <div className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Ask About Floor {selectedFloorNumber} Availability</span>
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

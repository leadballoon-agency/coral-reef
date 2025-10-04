import React from "react";
import { motion } from "framer-motion";
import { MapPin, Waves, Trees, Building2, BedDouble, Ruler, Calendar, ShieldCheck, LineChart, Phone, MessageCircle } from "lucide-react";

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
  // Official project image from Properties Thailand
  "https://propertiesthailand.co.uk/wp-content/uploads/2025/08/IMG_6199.jpg",
  "https://images.unsplash.com/photo-1526481280698-8fcc13fd237c?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526483360412-f4dbaf036963?q=80&w=1600&auto=format&fit=crop",
];

const gallery = [
  "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505692794403-34f83f3a9b9b?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1508330570239-ce7cabceee22?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521783593447-5702f3d34b45?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1600&auto=format&fit=crop",
];

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
    a: "The project is due for completion at the end of 2027. Construction milestones and regular updates will be provided throughout the development.",
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

const Highlight = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <div className="flex items-center gap-3 rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 shadow-sm">
    <Icon className="w-5 h-5" />
    <div>
      <p className="text-xs/4 uppercase tracking-widest text-white/70">{label}</p>
      <p className="text-base text-white font-medium">{value}</p>
    </div>
  </div>
);

const AmenityCard = ({ title, desc, img }: { title: string; desc: string; img: string }) => (
  <motion.div whileHover={{ y: -4 }} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur shadow-sm">
    <div className="aspect-[16/10] overflow-hidden">
      <img src={img} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
    </div>
    <div className="p-6">
      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <p className="text-white/70 mt-2 text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const Stat = ({ k, v }: { k: string; v: string }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
    <p className="text-xs uppercase tracking-widest text-white/60">{k}</p>
    <p className="mt-1 text-white text-lg font-semibold">{v}</p>
  </div>
);

const CTA = () => (
  <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
    <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/10 backdrop-blur px-3 py-2 shadow-lg">
      <a href="#enquire" className="rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition">Request Brochure</a>
      <a href="https://wa.me/{{WHATSAPP_NUMBER}}" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white/10 transition flex items-center gap-2">
        <MessageCircle className="w-4 h-4" /> WhatsApp
      </a>
      <a href="tel:{{PHONE_NUMBER}}" className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white/10 transition flex items-center gap-2">
        <Phone className="w-4 h-4" /> Call
      </a>
    </div>
  </div>
);

export default function CoralReefJomtienPage() {
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
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />
          <img src={heroImages[0]} alt="Jomtien Beach" className="h-[72vh] w-full object-cover" />
        </div>
        <div className="mx-auto max-w-7xl px-4">
          <div className="h-[72vh] flex items-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
              <p className="text-white/80 text-sm tracking-widest uppercase">5 Star Resort Living • Jomtien Beach • Investment</p>
              <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">
                Where the Sea Meets <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-teal-200">Luxury</span>
              </h1>
              <p className="mt-5 text-white/80 text-lg">Discover Copacabana - Coral Reef near Jomtien Beach — a striking 55‑storey development with 1,897 exclusive condominiums. 5 Star resort‑style living with an incredible range of facilities including wave pools, panoramic gym, 32 landscaped gardens and 24‑hour concierge.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#residences" className="rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:opacity-90">View Floor Plans</a>
                <a href="#enquire" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10">Request Brochure</a>
              </div>
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
            <h2 className="text-3xl md:text-4xl font-semibold">5 Star Resort Amenities</h2>
            <p className="mt-3 text-white/70">An incredible range of facilities including multiple swimming pools, wave pool with Jacuzzi, kids' club, mini‑theatre, sports courts, running track and 32 landscaped gardens. Every space is shaped for a life well‑lived.</p>
          </div>
          <div className="hidden md:block text-white/60 text-sm">Thoughtfully curated indoor & outdoor experiences</div>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <AmenityCard
            title="Infinity & Wave Pools"
            desc="Cool off with horizon views by day; ambient lighting transforms evenings into something cinematic."
            img="https://images.unsplash.com/photo-1505731132164-cca7fef8f228?q=80&w=1600&auto=format&fit=crop"
          />
          <AmenityCard
            title="Wellness & Spa"
            desc="Panoramic gym, onsen‑style relaxation zone, sauna and steam rooms designed to restore mind and body."
            img="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1600&auto=format&fit=crop"
          />
          <AmenityCard
            title="Co‑Working & Lounge"
            desc="Quiet zones, meeting corners and café ambience so you can work where you live, beautifully."
            img="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop"
          />
        </div>
      </section>

      {/* RESIDENCES */}
      <section id="residences" className="mx-auto max-w-7xl px-4 py-14">
        <div className="md:flex items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold">Residences Crafted for Coastal Living</h2>
            <p className="mt-3 text-white/70">Choose from stylish 1, 2, and 3‑bedroom layouts with refined finishes, efficient planning and abundant natural light. Breathtaking views across sea, city and sunset aspects.</p>
          </div>
          <div className="hidden md:block text-white/60 text-sm">Floor plans available upon request</div>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <img className="aspect-[16/10] w-full object-cover" src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop" alt="1 Bedroom" />
            <div className="p-6">
              <h3 className="text-lg font-semibold flex items-center gap-2"><BedDouble className="w-5 h-5"/> 1 Bedroom</h3>
              <p className="text-white/70 mt-2 text-sm">A balanced home base with a defined sleeping suite and generous living area. Starting from 3.5M THB.</p>
              <div className="mt-4 text-center">
                <a href="#enquire" className="text-sm text-sky-200 hover:text-sky-100">Request Details →</a>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <img className="aspect-[16/10] w-full object-cover" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop" alt="2 Bedroom" />
            <div className="p-6">
              <h3 className="text-lg font-semibold flex items-center gap-2"><BedDouble className="w-5 h-5"/> 2 Bedroom</h3>
              <p className="text-white/70 mt-2 text-sm">For families or sharers seeking space to gather, dine and unwind with breathtaking views.</p>
              <div className="mt-4 text-center">
                <a href="#enquire" className="text-sm text-sky-200 hover:text-sky-100">Request Details →</a>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <img className="aspect-[16/10] w-full object-cover" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop" alt="3 Bedroom" />
            <div className="p-6">
              <h3 className="text-lg font-semibold flex items-center gap-2"><BedDouble className="w-5 h-5"/> 3 Bedroom</h3>
              <p className="text-white/70 mt-2 text-sm">Premium living with multiple suites, perfect for larger families or those who love to entertain.</p>
              <div className="mt-4 text-center">
                <a href="#enquire" className="text-sm text-sky-200 hover:text-sky-100">Request Details →</a>
              </div>
            </div>
          </div>
        </div>

        {/* Download Plans */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#enquire" className="rounded-full bg-white text-black px-6 py-3 text-sm font-semibold">Request Full Floor Plans</a>
          <a href="#enquire" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10">Get the Price List</a>
        </div>
      </section>

      {/* INVESTMENT */}
      <section id="investment" className="mx-auto max-w-7xl px-4 py-14">
        <div className="md:flex items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold">The Investment Case</h2>
            <p className="mt-3 text-white/70">Beach‑adjacent property in Jomtien benefits from robust holiday demand, developing infrastructure and an established lifestyle scene. Request our comparables pack, historical trends and modelled cash‑flows tailored to your preferred unit type.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-white/70"><LineChart className="w-5 h-5"/> Data‑backed insights available</div>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Stat k="Capital Growth" v="Strong potential in rapidly growing location" />
          <Stat k="Rental Yields" v="Attractive returns with high holiday demand" />
          <Stat k="Management" v="Hands‑free options available" />
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="mx-auto max-w-7xl px-4 py-14">
        <div className="md:flex items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold">Jomtien — Calm, Connected, Coastal</h2>
            <p className="mt-3 text-white/70">Located just moments from Jomtien Beach and the popular Night Market, with a relaxed, family‑friendly vibe yet close to Pattaya's vibrant nightlife, dining and shopping.</p>
          </div>
          <div className="hidden md:block text-white/60 text-sm">Everything you need, moments away</div>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Highlight icon={MapPin} label="Jomtien Beach" value="Short walk" />
          <Highlight icon={MapPin} label="Night Market" value="Walking distance" />
          <Highlight icon={MapPin} label="Pattaya City" value="Close proximity" />
        </div>
        {/* Map placeholder — swap for embedded map or custom map */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
          <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" alt="Map placeholder" className="w-full h-72 object-cover opacity-90" />
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="mx-auto max-w-7xl px-4 py-14">
        <div className="md:flex items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold">Gallery</h2>
            <p className="mt-3 text-white/70">A glimpse of life at Copacabana - Coral Reef — from tranquil mornings to golden hour by the water. 5 Star resort‑style living with world‑class facilities.</p>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-4 gap-4">
          {gallery.map((src, i) => (
            <img key={i} src={src} className="rounded-2xl border border-white/10 object-cover w-full aspect-square" alt={`Gallery ${i+1}`} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-3xl md:text-4xl font-semibold">Frequently Asked Questions</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold flex items-start justify-between">
                <span>{f.q}</span>
                <span className="ml-4 text-white/50 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ENQUIRE */}
      <section id="enquire" className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur">
          <div className="md:flex items-start gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-semibold">Request the Copacabana - Coral Reef Brochure</h2>
              <p className="mt-3 text-white/70">Floor plans, price list, payment terms and investment insights — delivered to your inbox. Or chat with us on WhatsApp for quick answers.</p>
              <div className="mt-6 grid gap-3">
                <a href="https://wa.me/{{WHATSAPP_NUMBER}}" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:opacity-90">
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
                <a href="tel:{{PHONE_NUMBER}}" className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10">
                  <Phone className="w-4 h-4" /> Call Our Team
                </a>
              </div>
              <div className="mt-8 grid md:grid-cols-3 gap-3 text-sm">
                <Stat k="UK & TH Teams" v="Local + on‑ground support" />
                <Stat k="Secure Process" v="Independent legal guidance" />
                <Stat k="After‑Sales" v="Lettings & management" />
              </div>
            </div>
            <form className="md:w-1/2 mt-8 md:mt-0 grid gap-4">
              <div>
                <label className="text-sm text-white/70">Full Name</label>
                <input className="mt-1 w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3 outline-none focus:border-white/40" placeholder="Jane Smith" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-white/70">Email</label>
                  <input className="mt-1 w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3 outline-none focus:border-white/40" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="text-sm text-white/70">Phone / WhatsApp</label>
                  <input className="mt-1 w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3 outline-none focus:border-white/40" placeholder="+44 …" />
                </div>
              </div>
              <div>
                <label className="text-sm text-white/70">Interested In</label>
                <select className="mt-1 w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3 outline-none focus:border-white/40">
                  <option>1 Bedroom</option>
                  <option>2 Bedroom</option>
                  <option>3 Bedroom</option>
                  <option>Unsure — send full details</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-white/70">Message (optional)</label>
                <textarea rows={4} className="mt-1 w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3 outline-none focus:border-white/40" placeholder="Tell us your plans, travel dates, or any questions." />
              </div>
              <button type="button" className="rounded-xl bg-white text-black px-6 py-3 text-sm font-semibold hover:opacity-90">Send Enquiry</button>
              <p className="text-xs text-white/60">By submitting, you agree to be contacted about Copacabana - Coral Reef Jomtien. Your information is kept private and never sold.</p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-16 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-white/60">
          <div className="md:flex items-center justify-between gap-6">
            <p>© {new Date().getFullYear()} Properties Thailand • Copacabana - Coral Reef Jomtien</p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Legal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

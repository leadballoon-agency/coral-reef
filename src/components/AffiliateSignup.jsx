import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle2,
  Users,
  TrendingUp,
  Building2,
  Handshake,
  Send,
  Globe,
  Mail,
  Phone,
  User,
  MessageSquare,
  Loader2,
  Layout,
  Calculator,
  Map,
  Images,
  Layers,
  MousePointerClick,
  ExternalLink
} from 'lucide-react';

// GHL Webhook URL
const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/hdJJWL7761qzeqA9gab6/webhook-trigger/afb77eec-931e-4785-a22c-84ecfa94d79b';

// Facebook Pixel helper
const fbq = (...args) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq(...args);
  }
};

const promotionOptions = [
  { id: 'social', label: 'Social Media' },
  { id: 'email', label: 'Email List' },
  { id: 'youtube', label: 'YouTube/Video' },
  { id: 'blog', label: 'Blog/Website' },
  { id: 'forums', label: 'Property Forums' },
  { id: 'paid', label: 'Paid Advertising' },
  { id: 'network', label: 'Personal Network' },
  { id: 'other', label: 'Other' }
];

const audienceOptions = [
  { value: 'under-1k', label: 'Under 1,000' },
  { value: '1k-10k', label: '1,000 - 10,000' },
  { value: '10k-50k', label: '10,000 - 50,000' },
  { value: '50k-plus', label: '50,000+' }
];

const benefits = [
  {
    icon: Building2,
    title: 'Premium Property',
    description: 'Luxury beachfront development that sells itself - stunning views, world-class amenities, prime location.'
  },
  {
    icon: TrendingUp,
    title: 'Attractive Commissions',
    description: 'Competitive commission structure on property sales. High-value transactions mean significant earnings.'
  },
  {
    icon: Users,
    title: 'Marketing Support',
    description: 'Access to professional marketing materials, property images, floor plans, and sales collateral.'
  },
  {
    icon: Handshake,
    title: 'Dedicated Partner Team',
    description: 'Direct line to our sales team. We handle viewings, negotiations, and paperwork.'
  }
];

const toolFeatures = [
  {
    icon: Layout,
    title: 'Interactive Unit Browser',
    description: 'Filter by beds, budget, floor & view. Your leads find their perfect unit in seconds.'
  },
  {
    icon: Layers,
    title: 'Detailed Floor Plans',
    description: 'Every unit type with full layouts. Tower floor plans showing exact positions.'
  },
  {
    icon: Calculator,
    title: 'Investment Calculator',
    description: 'ROI projections, rental yields, price comparisons. The numbers that close deals.'
  },
  {
    icon: Images,
    title: '3D Virtual Tours',
    description: 'Matterport tours for every unit type. Prospects explore from anywhere in the world.'
  },
  {
    icon: Map,
    title: 'Location & Amenities',
    description: 'Interactive maps, facility guides, nearby attractions. Everything they need to know.'
  },
  {
    icon: MousePointerClick,
    title: 'One-Click Enquiries',
    description: 'WhatsApp integration throughout. When they\'re ready, we take over instantly.'
  }
];

const AffiliateSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    websiteSocial: '',
    promotionMethods: [],
    audienceSize: '',
    about: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fbq('track', 'ViewContent', {
      content_name: 'Affiliate Signup Page',
      content_category: 'Affiliate'
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (optionId) => {
    setFormData(prev => ({
      ...prev,
      promotionMethods: prev.promotionMethods.includes(optionId)
        ? prev.promotionMethods.filter(id => id !== optionId)
        : [...prev.promotionMethods, optionId]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Get readable values
    const promotionMethodLabels = formData.promotionMethods.map(id =>
      promotionOptions.find(opt => opt.id === id)?.label
    ).filter(Boolean);
    const audienceSizeLabel = audienceOptions.find(opt => opt.value === formData.audienceSize)?.label || 'Not specified';

    // Build formatted notes for GHL
    const notes = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AFFILIATE APPLICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📱 PROMOTION CHANNELS
${promotionMethodLabels.length > 0 ? promotionMethodLabels.map(m => `   • ${m}`).join('\n') : '   • Not specified'}

👥 AUDIENCE SIZE
   ${audienceSizeLabel}

🌐 WEBSITE / SOCIAL
${formData.websiteSocial ? formData.websiteSocial.split('\n').map(link => `   • ${link.trim()}`).filter(l => l !== '   •').join('\n') : '   • Not provided'}

💬 ABOUT THEMSELVES
${formData.about ? `   ${formData.about}` : '   Not provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date().toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })}
Source: Affiliate Signup Page
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim();

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      website_social: formData.websiteSocial,
      promotion_methods: promotionMethodLabels,
      audience_size: audienceSizeLabel,
      about: formData.about,
      notes: notes,
      source: 'affiliate_signup_page',
      submitted_at: new Date().toISOString()
    };

    try {
      // Send to GHL webhook
      if (WEBHOOK_URL !== 'WEBHOOK_URL_PLACEHOLDER') {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
          mode: 'no-cors' // GHL webhooks may not return CORS headers
        });
      }

      // Track conversion
      fbq('track', 'Lead', {
        content_name: 'affiliate_application',
        value: 0,
        currency: 'GBP'
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Become a Partner | Jomtien Property Affiliate Programme</title>
        <meta name="description" content="Partner with Jomtien Property and earn commissions on Thailand's most exciting beachfront development. Share your link, we do the heavy lifting with our interactive property platform." />
        <link rel="canonical" href="https://jomtienproperty.com/affiliate" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Partner With Jomtien Property | Earn Commissions on Thai Beachfront Property" />
        <meta property="og:description" content="Join our affiliate programme and earn commissions promoting Thailand's most exciting beachfront development. We provide the sales tool - you just share your link." />
        <meta property="og:url" content="https://jomtienproperty.com/affiliate" />
        <meta property="og:image" content="https://jomtienproperty.com/hero-optimized.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Jomtien Property" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Partner With Jomtien Property | Affiliate Programme" />
        <meta name="twitter:description" content="Earn commissions promoting luxury Thai beachfront property. Interactive sales tool included - just share your link." />
        <meta name="twitter:image" content="https://jomtienproperty.com/hero-optimized.jpg" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Jomtien Property Affiliate Programme",
            "description": "Partner with Jomtien Property and earn commissions on Thailand's most exciting beachfront development.",
            "url": "https://jomtienproperty.com/affiliate",
            "mainEntity": {
              "@type": "Service",
              "name": "Jomtien Property Affiliate Programme",
              "description": "Earn commissions by referring qualified buyers to Copacabana Coral Reef Jomtien, a luxury beachfront development in Thailand.",
              "provider": {
                "@type": "Organization",
                "name": "Jomtien Property",
                "url": "https://jomtienproperty.com"
              },
              "areaServed": "Worldwide",
              "serviceType": "Affiliate Marketing Programme"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://jomtienproperty.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Affiliate Programme",
                  "item": "https://jomtienproperty.com/affiliate"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Header */}
        <div className="border-b border-white/10 bg-white/5 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Property</span>
            </a>
            <div className="text-xs text-white/50">Partner Programme</div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-6">
                Affiliate Programme
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Partner With
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Jomtien Property
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-8">
                Earn attractive commissions promoting Thailand's most exciting beachfront development.
                Premium property, professional support, proven demand.
              </p>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mt-12"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-400">55</div>
                <div className="text-sm text-white/60">Floors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-400">฿3M+</div>
                <div className="text-sm text-white/60">Starting Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-400">54%</div>
                <div className="text-sm text-white/60">Construction</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Partner With Us?</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Join a select group of partners promoting premium Thai property to qualified buyers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-white/60">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Sales Tool Section */}
        <section className="py-16 px-4 border-t border-white/10 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-4">
                We've Done The Hard Work
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Sales Tool Is Ready</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                Just share your link. Our interactive property platform does all the heavy lifting —
                educating, engaging, and converting your audience into qualified leads.
              </p>
            </div>

            {/* Tool Preview */}
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                <img
                  src="/hero-optimized.jpg"
                  alt="Jomtien Property Platform"
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">jomtienproperty.com</h3>
                      <p className="text-white/70 text-sm">The complete property showcase your leads will love</p>
                    </div>
                    <a
                      href="/"
                      target="_blank"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 rounded-xl font-medium transition"
                    >
                      Preview The Tool
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Tool Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {toolFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-5 hover:bg-white/10 transition group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/30 transition">
                      <feature.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-white/60">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Simple Process */}
            <div className="mt-12 bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-center mb-8">How It Works</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4 text-emerald-400 font-bold text-xl">1</div>
                  <h4 className="font-semibold mb-2">Share Your Link</h4>
                  <p className="text-sm text-white/60">Post to social media, email your list, or share with your network</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4 text-emerald-400 font-bold text-xl">2</div>
                  <h4 className="font-semibold mb-2">We Educate & Convert</h4>
                  <p className="text-sm text-white/60">Our platform showcases the property with all the tools to drive enquiries</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4 text-emerald-400 font-bold text-xl">3</div>
                  <h4 className="font-semibold mb-2">You Earn Commission</h4>
                  <p className="text-sm text-white/60">When your referral purchases, you get paid. Simple as that.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-16 px-4 border-t border-white/10">
          <div className="max-w-2xl mx-auto">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                {/* Animated Success Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                  className="relative mx-auto mb-8"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                    <CheckCircle2 className="w-12 h-12 text-white" />
                  </div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                    className="absolute inset-0 rounded-full bg-emerald-500/30"
                  />
                </motion.div>

                {/* Thank You Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    You're In, {formData.name.split(' ')[0]}! 🎉
                  </h2>
                  <p className="text-xl text-white/70 mb-8 max-w-lg mx-auto">
                    Your application has been received. We're excited to potentially have you as a partner.
                  </p>
                </motion.div>

                {/* What Happens Next */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 mb-8"
                >
                  <h3 className="text-lg font-semibold mb-6 text-emerald-400">What Happens Next?</h3>
                  <div className="grid gap-4 text-left">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400 font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-medium mb-1">Application Review</h4>
                        <p className="text-sm text-white/60">Our team will review your application within 24-48 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400 font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-medium mb-1">Personal Welcome Call</h4>
                        <p className="text-sm text-white/60">If approved, we'll schedule a quick call to discuss the programme and answer questions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400 font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-medium mb-1">Get Your Affiliate Link</h4>
                        <p className="text-sm text-white/60">You'll receive your unique tracking link and marketing materials</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400 font-bold text-sm">4</div>
                      <div>
                        <h4 className="font-medium mb-1">Start Earning</h4>
                        <p className="text-sm text-white/60">Share your link and earn commissions on every successful referral</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-xl font-medium transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Explore The Property
                  </a>
                  <a
                    href="/birmingham-to-beachfront"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition"
                  >
                    Read Our Story
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </a>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-8 space-y-3"
                >
                  <p className="text-sm text-white/50">
                    Questions? Get in touch:
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href="https://wa.me/447775978555?text=Hi!%20I%20just%20applied%20to%20the%20affiliate%20programme%20and%20have%20a%20question."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm font-medium transition"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      WhatsApp Us
                    </a>
                    <a
                      href="mailto:partners@jomtienproperty.com"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition"
                    >
                      <Mail className="w-4 h-4" />
                      partners@jomtienproperty.com
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Apply to Become a Partner</h2>
                  <p className="text-white/60">
                    Tell us about yourself and how you'd promote Copacabana Coral Reef Jomtien.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Full Name <span className="text-emerald-400">*</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      <span className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Address <span className="text-emerald-400">*</span>
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      <span className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Phone Number <span className="text-emerald-400">*</span>
                      </span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition"
                      placeholder="+44 7700 900123"
                    />
                  </div>

                  {/* Website/Social */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      <span className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Website or Social Media Links
                      </span>
                    </label>
                    <textarea
                      name="websiteSocial"
                      value={formData.websiteSocial}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition resize-none"
                      placeholder="instagram.com/yourhandle&#10;linkedin.com/in/yourprofile&#10;yourwebsite.com"
                    />
                  </div>

                  {/* Promotion Methods */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-3">
                      How will you promote?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {promotionOptions.map(option => (
                        <label
                          key={option.id}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition ${
                            formData.promotionMethods.includes(option.id)
                              ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                              : 'bg-white/5 border-white/20 hover:bg-white/10'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.promotionMethods.includes(option.id)}
                            onChange={() => handleCheckboxChange(option.id)}
                            className="sr-only"
                          />
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                            formData.promotionMethods.includes(option.id)
                              ? 'border-emerald-400 bg-emerald-400'
                              : 'border-white/40'
                          }`}>
                            {formData.promotionMethods.includes(option.id) && (
                              <svg className="w-3 h-3 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <span className="text-sm">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Audience Size */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Estimated Audience Reach
                    </label>
                    <select
                      name="audienceSize"
                      value={formData.audienceSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition appearance-none"
                    >
                      <option value="" className="bg-slate-800">Select an option</option>
                      {audienceOptions.map(option => (
                        <option key={option.value} value={option.value} className="bg-slate-800">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* About */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      <span className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        Tell us about yourself
                      </span>
                    </label>
                    <textarea
                      name="about"
                      value={formData.about}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition resize-none"
                      placeholder="Share your experience, audience demographics, or why you're interested in promoting Thai property..."
                    />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="px-4 py-3 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 text-sm">
                      {error}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Application
                      </>
                    )}
                  </button>

                  <p className="text-xs text-white/40 text-center">
                    We'll review your application and respond within 24-48 hours.
                  </p>
                </form>
              </motion.div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center text-sm text-white/40">
            <p>&copy; {new Date().getFullYear()} Jomtien Property. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AffiliateSignup;

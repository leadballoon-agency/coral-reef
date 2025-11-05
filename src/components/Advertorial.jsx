import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = "66959451665";

// Facebook Pixel helper
const fbq = (...args) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq(...args);
  }
};

const Advertorial = () => {
  // Track page view on mount
  useEffect(() => {
    fbq('track', 'ViewContent', {
      content_name: 'Birmingham to Beachfront Advertorial',
      content_category: 'Advertorial'
    });
  }, []);

  // Track WhatsApp clicks
  const trackWhatsAppClick = (location) => {
    fbq('track', 'Contact');
    fbq('trackCustom', 'AdvertorialWhatsAppClick', {
      location: location,
      advertorial: 'Birmingham to Beachfront'
    });
  };

  // Track CTA clicks
  const trackCTAClick = (cta_type) => {
    fbq('trackCustom', 'AdvertorialCTAClick', {
      cta_type: cta_type,
      advertorial: 'Birmingham to Beachfront'
    });
  };

  return (
    <>
      <Helmet>
        <title>From Birmingham to Beachfront: Why We Traded Grey Skies for Jomtien Sunsets | Real Story</title>
        <meta name="description" content="How two 58-year-olds from Birmingham bought a Thai beachfront condo off-plan. The honest story of Brian & Jane's £182k gamble on paradise - doubts, costs, and all." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="From Birmingham to Beachfront: Our £182k Bet on Thai Paradise" />
        <meta property="og:description" content="Real story: How we traded Birmingham winters for Jomtien Beach. Off-plan purchase, honest doubts, and the math that made us do it." />
        <meta property="og:image" content="https://jomtienproperty.com/bedroom-view.jpeg" />
        <meta property="og:url" content="https://jomtienproperty.com/birmingham-to-beachfront" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="From Birmingham to Beachfront: Our Thai Property Story" />
        <meta name="twitter:description" content="How two ordinary Brits bought a £182k Thai condo that doesn't exist yet. The honest story." />
        <meta name="twitter:image" content="https://jomtienproperty.com/bedroom-view.jpeg" />

        {/* Article Meta */}
        <meta property="article:published_time" content="2025-10-07" />
        <meta property="article:author" content="Brian & Jane Thompson" />
        <meta property="article:tag" content="Thailand Property" />
        <meta property="article:tag" content="Expat Life" />
        <meta property="article:tag" content="Retirement Planning" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Header with back button */}
        <div className="border-b border-white/10 bg-white/5 backdrop-blur sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Property Listings</span>
            </a>
            <div className="text-xs text-white/50">Real Story • Not Financial Advice</div>
          </div>
        </div>

        {/* Hero Section */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Article Header */}
          <header className="mb-12 text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-300 text-xs font-medium mb-4">
              ADVERTORIAL
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              From Birmingham to Beachfront: Why We Traded Grey Skies for Jomtien Sunsets
            </h1>
            <p className="text-xl text-white/70 italic mb-6">
              It's 7am on a Tuesday in October 2025. I'm standing at the Coral Reef Jomtien construction site, watching the sunrise paint the Gulf of Thailand gold. In exactly 24 months, I'll be swimming in the 51st floor Cantilever Pool at this same hour. My wife Jane and I just bought our retirement dream at 38% complete. Here's the honest story.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-white/50">
              <span>By Brian & Jane Thompson</span>
              <span>•</span>
              <span>October 2025</span>
              <span>•</span>
              <span>18 min read</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            {/* The Breaking Point */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">The Breaking Point: When Another British Winter Nearly Broke Us</h2>

              <p className="text-white/80 leading-relaxed mb-4">
                I'll never forget that morning in February 2025.
              </p>

              <p className="text-white/80 leading-relaxed mb-6">
                Jane found me in the kitchen at 5:30am, already dressed in three layers, trying to coax our ancient boiler back to life. The heating bill had just arrived – £347 for January alone. Outside, the rain hadn't stopped for eight days straight. The weather app promised more of the same until April.
              </p>

              {/* Pull Quote 1 */}
              <blockquote className="my-8 pl-6 border-l-4 border-teal-400 italic text-2xl text-white/90">
                "That's it. We're not doing another winter like this."
                <footer className="text-base text-white/60 not-italic mt-2">— Jane, 5:30am, February 2025, standing in a cold kitchen</footer>
              </blockquote>

              <p className="text-white/80 leading-relaxed mb-4">
                "That's it," she said, surprising herself with the firmness. "We're not doing another winter like this."
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                At 58 and 56, we weren't exactly spring chickens anymore. My knees reminded me of that fact every time I climbed our Victorian terrace stairs. Jane's arthritis had been getting worse each winter. Our combined pensions would keep us comfortable enough in Birmingham – but comfortable felt like another word for "waiting to die" when I really thought about it.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                We'd worked our entire lives. Raised two kids. Paid off the mortgage. Done everything "right."
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                And our reward? Watching Countdown in a cold living room, rationing the heating, and pretending we weren't jealous of Facebook photos from friends who'd been brave enough to try something different.
              </p>

              <p className="text-white/80 leading-relaxed">
                "Remember Jomtien Beach?" Jane asked.
              </p>

              <p className="text-white/80 leading-relaxed">
                How could I forget?
              </p>
            </section>

            {/* The Thailand Dream Discovery */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">The Thailand Dream Discovery: When Paradise Felt Possible</h2>

              <p className="text-white/80 leading-relaxed mb-4">
                We'd spent three weeks in Thailand in January 2025 – our first proper adventure since the kids left home. Originally planned for Phuket (every Brit's default), but a cancelled flight diverted us to Pattaya. Best accident that ever happened to us.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                While Pattaya city center was a bit... much (let's just say it's not for everyone), Jomtien Beach was different. Calmer. Classier. Real.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                I still remember that first morning walk along Jomtien Beach Road. The sun already warm at 7am (imagine that in January!). Thai ladies doing their morning exercises on the beach. The smell of proper coffee from the beachfront cafés – not a Costa in sight, but somehow better.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                But it was the expats who really opened our eyes.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                We met Derek at a beach bar. 72, from Manchester, been living in Jomtien five years. "Best decision I ever made," he said, and you could see it in his face – proper color in his cheeks, none of that grey pallor we all carry through British winters.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                "What's it really like though?" Jane asked. "The forums all say never buy property here."
              </p>

              {/* Pull Quote 2 */}
              <blockquote className="my-8 pl-6 border-l-4 border-teal-400 italic text-2xl text-white/90">
                "The forums are full of bitter blokes who bought wrong or can't afford it. You do your homework, buy in the right place, and it's brilliant."
                <footer className="text-base text-white/60 not-italic mt-2">— Derek, 72, Manchester expat living in Jomtien 5 years</footer>
              </blockquote>

              <p className="text-white/80 leading-relaxed mb-4">
                Derek laughed. "The forums are full of bitter blokes who bought wrong or can't afford it. You do your homework, buy in the right place, and it's brilliant. My condo costs me less per month than my council tax used to be in Manchester."
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                "See that tower going up?" Derek pointed to a construction site with a sign reading "38% COMPLETE." "Copacabana's new project. If I was buying now, that's where I'd look. Their first building's proper quality – none of that Thai corner-cutting nonsense."
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                We walked past it later. A massive billboard: "Coral Reef Jomtien - 55 Storeys of Luxury Living - Completion Q4 2027."
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                The construction site was buzzing. You could see they were up to about floor 20. Real progress, not just a hole in the ground.
              </p>

              <p className="text-white/80 leading-relaxed">
                Jane squeezed my hand. "What if...?"
              </p>
            </section>

            {/* Cost Comparison Sidebar */}
            <aside className="my-12 p-8 rounded-2xl bg-gradient-to-br from-sky-500/10 to-teal-500/10 border-l-4 border-sky-400">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                💰 THE REAL COST COMPARISON
              </h3>
              <p className="text-lg text-white/80 mb-6">What British Retirees Don't Calculate</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-white mb-3">BIRMINGHAM ANNUAL COSTS (Our Reality):</h4>
                  <table className="w-full text-sm">
                    <tbody className="text-white/70">
                      <tr className="border-b border-white/10">
                        <td className="py-2">Heating (Gas + Electric)</td>
                        <td className="text-right">£3,200</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2">Council Tax</td>
                        <td className="text-right">£2,400</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2">Home Maintenance/Repairs</td>
                        <td className="text-right">£1,800</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2">Water Rates</td>
                        <td className="text-right">£450</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2">Home Insurance</td>
                        <td className="text-right">£320</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2">TV License</td>
                        <td className="text-right">£159</td>
                      </tr>
                      <tr className="font-bold text-white">
                        <td className="py-2">TOTAL ANNUAL COST</td>
                        <td className="text-right">£8,329</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-3">CORAL REEF JOMTIEN ANNUAL COSTS:</h4>
                  <table className="w-full text-sm">
                    <tbody className="text-white/70">
                      <tr className="border-b border-white/10">
                        <td className="py-2">Common Area Fees</td>
                        <td className="text-right">£1,200</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2">Utilities (3 months)</td>
                        <td className="text-right">£400</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2">Annual Flights (2 people)</td>
                        <td className="text-right">£1,200</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2">Travel Insurance</td>
                        <td className="text-right">£280</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2">Thai SIM cards & misc</td>
                        <td className="text-right">£120</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2">SUB-TOTAL</td>
                        <td className="text-right">£3,200</td>
                      </tr>
                      <tr className="border-b border-white/10 text-emerald-400">
                        <td className="py-2">LESS: Rental Income</td>
                        <td className="text-right">-£8,400</td>
                      </tr>
                      <tr className="font-bold text-emerald-400">
                        <td className="py-2">NET ANNUAL COST</td>
                        <td className="text-right">-£5,200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="text-center py-4 px-6 rounded-xl bg-emerald-500/20 border border-emerald-500/30">
                <p className="text-2xl font-bold text-emerald-300">ANNUAL SAVINGS: £13,529</p>
                <p className="text-sm text-white/70 mt-1">Plus 90 days of 28°C sunshine instead of Birmingham grey</p>
              </div>

              <div className="mt-6 text-sm text-white/60">
                <p className="mb-2"><strong>The Hidden Cost Nobody Mentions:</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Birmingham GP appointments: 3-week wait</li>
                  <li>Jomtien private clinic: Same-day, £15 consultation</li>
                  <li>Our arthritis medications? 70% cheaper in Thailand</li>
                </ul>
                <p className="mt-4 text-xs">
                  <strong>Notes:</strong> Rental income assumes 60% occupancy at 40,000 THB/month • Exchange rate: 40 THB = £1 • Management takes 20% • Figures based on actual quotes, not marketing material
                </p>
              </div>
            </aside>

            {/* Continue story... */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">The Numbers That Actually Made Sense</h2>

              <p className="text-white/80 leading-relaxed mb-4">
                Back in Birmingham that February, we couldn't stop thinking about it.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                Jane had printed out everything – forum discussions, property guides. Our dining table looked like a detective's incident room. Red pen circles around warnings ("Thai condos depreciate!"), green highlights on positives ("6-8% rental yields typical in Jomtien").
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                I emailed the website directly. Expected a sleazy salesman. Instead, got Michael, who started with:
              </p>

              {/* Pull Quote 3 */}
              <blockquote className="my-8 pl-6 border-l-4 border-teal-400 italic text-2xl text-white/90">
                "This isn't a get-rich-quick investment. Thai property doesn't appreciate like the UK. You're buying this for lifestyle and modest income, not to flip for profit."
                <footer className="text-base text-white/60 not-italic mt-2">— Michael, Sales Consultant (refreshingly honest)</footer>
              </blockquote>

              <p className="text-white/80 leading-relaxed mb-4">
                Refreshing.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                Here's what we had: £250k in savings, paid-off house in Birmingham, and dreams bigger than our bank balance suggested.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                Michael sent over a proper spreadsheet – not marketing fluff, but actual numbers.
              </p>

              <div className="my-6 p-6 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold mb-3">Type 15.1 - What We Were Looking At:</h4>
                <ul className="space-y-2 text-white/70">
                  <li>• Price: 7.3M THB (£182,500 at 40 THB to pound)</li>
                  <li>• Size: 67.6 sqm (728 sq ft)</li>
                  <li>• Bedrooms: 2</li>
                  <li>• Available floors: Multiple between 7-54</li>
                  <li>• View: Direct Sea View</li>
                </ul>
              </div>

              <p className="text-white/80 leading-relaxed mb-4">
                Jane had been calculating. "So we could stay three months a year, rent it nine months, and it basically pays for itself?"
              </p>

              <p className="text-white/80 leading-relaxed">
                "That's the idea. Plus, Jomtien's growing. Eastern Economic Corridor, new infrastructure. No promises, but it's better positioned than most Thai locations."
              </p>
            </section>

            {/* Making the Commitment */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Making the Commitment: Signing on the Dotted Line</h2>

              <p className="text-white/80 leading-relaxed mb-4">
                We didn't sign that day. Flew home, spent another week agonizing.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                The forums kept warning us off. Our financial advisor suggested index funds instead. Our kids thought we'd gone mad.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                But then Jane said something that clinched it:
              </p>

              {/* Pull Quote 4 */}
              <blockquote className="my-8 pl-6 border-l-4 border-teal-400 italic text-2xl text-white/90">
                "We've been sensible our whole lives. Where's it gotten us? A cold house and aching joints. Maybe it's time to be a little mad."
                <footer className="text-base text-white/60 not-italic mt-2">— Jane Thompson, 56, making the call</footer>
              </blockquote>

              <p className="text-white/80 leading-relaxed mb-4">
                I called Michael. "We want floor 40. Near the Sky Pool level. Type 15.1."
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                "Brilliant choice. I'll send the reservation agreement."
              </p>

              <p className="text-white/80 leading-relaxed">
                Transferring that first £54,750 felt like jumping off a cliff. What if the building never finished? What if we couldn't sell? What if, what if, what if...
              </p>

              <p className="text-white/80 leading-relaxed">
                But then I remembered Derek from the beach bar, his tanned face and easy smile. "Best decision I ever made."
              </p>
            </section>

            {/* Risk Sidebar */}
            <aside className="my-12 p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-l-4 border-amber-400">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                ⚠️ THE RISKS WE'RE TAKING (And Why We Did It Anyway)
              </h3>
              <p className="text-white/80 mb-6">We're not hiding anything. Here's what could go wrong:</p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-amber-300 mb-2">HIGH PROBABILITY RISKS ⚡</h4>

                  <div className="mb-4">
                    <p className="font-semibold text-white mb-1">Currency Fluctuation</p>
                    <p className="text-sm text-white/70 mb-1">✗ <strong>Risk:</strong> Pound weakens against baht (our staged payments cost more)</p>
                    <p className="text-sm text-white/70 mb-1">✓ <strong>Mitigation:</strong> We've locked in exchange rate for first 30% payment</p>
                    <p className="text-sm text-white/70 mb-1">📊 <strong>Impact:</strong> Additional £5,000-£15,000 cost</p>
                    <p className="text-sm text-emerald-400">🤔 <strong>Our take:</strong> Worth it for 24 months of 28°C mornings</p>
                  </div>

                  <div className="mb-4">
                    <p className="font-semibold text-white mb-1">Construction Delays</p>
                    <p className="text-sm text-white/70 mb-1">✗ <strong>Risk:</strong> Q4 2027 completion becomes Q2 2028</p>
                    <p className="text-sm text-white/70 mb-1">✓ <strong>Mitigation:</strong> Penalty clauses in contract</p>
                    <p className="text-sm text-white/70 mb-1">📊 <strong>Impact:</strong> 6 months extra waiting, some compensation</p>
                    <p className="text-sm text-emerald-400">🤔 <strong>Our take:</strong> Thai timelines are flexible - we're mentally prepared</p>
                  </div>

                  <div>
                    <p className="font-semibold text-white mb-1">Rental Income Lower Than Expected</p>
                    <p className="text-sm text-white/70 mb-1">✗ <strong>Risk:</strong> Only 40% occupancy instead of 60-70%</p>
                    <p className="text-sm text-white/70 mb-1">✓ <strong>Mitigation:</strong> We can cover shortfall from UK pension</p>
                    <p className="text-sm text-white/70 mb-1">📊 <strong>Impact:</strong> £3,000/year out of pocket</p>
                    <p className="text-sm text-emerald-400">🤔 <strong>Our take:</strong> Still cheaper than Birmingham heating bills</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="font-bold text-white mb-2">Why We're Comfortable With These Risks:</h4>
                  <p className="text-sm text-white/70 mb-2"><strong>The Alternative Risk Nobody Talks About:</strong></p>
                  <ul className="text-sm text-white/70 space-y-1 ml-4">
                    <li>• 100% chance of declining health in cold climate</li>
                    <li>• 100% chance of rising UK energy costs</li>
                    <li>• 100% chance of spending retirement watching Countdown</li>
                    <li>• 100% chance of wondering "what if we'd tried?"</li>
                  </ul>

                  <p className="text-white/90 mt-4 font-semibold">The Number That Matters:</p>
                  <p className="text-sm text-white/70">If everything goes averagely, we're £13,500/year better off. If everything goes badly, we're £2,000/year worse off but living in sunshine. The math works even in the bad scenario.</p>
                </div>
              </div>
            </aside>

            {/* Seven Months In */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Seven Months In: The Reality of Buying Off-Plan</h2>

              <p className="text-white/80 leading-relaxed mb-4">
                It's October 2025 now. We've paid £75,000 so far. The building's up to floor 35.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                Every few weeks, we check the website's construction updates. Real photos, not renders. You can see the progress – floor 51's cantilever pool structure is taking shape. The shape of our future is literally forming.
              </p>

              <div className="my-8 rounded-xl overflow-hidden border border-white/10">
                <img
                  src="/bedroom-view.jpeg"
                  alt="View from our future bedroom at Coral Reef Jomtien"
                  className="w-full"
                />
                <p className="text-sm text-white/60 text-center py-3 bg-white/5">
                  The view from our future bedroom. This is what we wake up to in 24 months. Worth the wait?
                </p>
              </div>

              <p className="text-white/80 leading-relaxed">
                We've been back three times to check. Each visit, it's taller. Each visit, more real.
              </p>
            </section>

            {/* The Doubts */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">The Doubts: Let's Be Honest</h2>

              <p className="text-white/80 leading-relaxed mb-4">
                Some nights, I lie awake thinking we've made a terrible mistake.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                What if we can't rent it out? The forums are full of empty condos.<br/>
                What if we can't sell it? Thai property liquidity is notoriously poor.<br/>
                What if the developer has problems? It's happened before.<br/>
                What if we hate living there? Three weeks' holiday isn't living somewhere.
              </p>

              <p className="text-white/80 leading-relaxed">
                But then I remember the alternative: nothing. Doing nothing. Staying in Birmingham, getting older, colder, greyer. That's not a "what if" – that's a certainty.
              </p>

              <p className="text-white/80 leading-relaxed">
                At least this gamble has upside.
              </p>
            </section>

            {/* Final Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">The October 2025 Moment: Where We Stand Now</h2>

              <p className="text-white/80 leading-relaxed mb-4">
                As I write this, our building is 38% complete. Our floor (40) is weeks away from being poured. Our future is one-third real, two-thirds promise.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                We're in Jomtien now, staying in a modest hotel, watching our future home grow daily. This morning, we walked the beach at sunrise. 28°C at 7am. Locals doing tai chi. Expats walking their dogs. The life we're buying into, happening all around us.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                Is it paradise? No. There's traffic. There's noise. There are the "Pattaya elements" if you go looking for them.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                But it's life. Real, warm, possible life. Not the suspended animation of British retirement.
              </p>

              {/* Pull Quote 5 */}
              <blockquote className="my-8 pl-6 border-l-4 border-teal-400 italic text-2xl text-white/90">
                "Our Birmingham friends are planning retirement around TV schedules and grocery discounts. We're planning ours around pool schedules and sunset views. Who's really lost it?"
                <footer className="text-base text-white/60 not-italic mt-2">— Brian Thompson, 58, seven months in</footer>
              </blockquote>
            </section>

            {/* Enhanced CTA Section */}
            <section className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-sky-500/20 to-teal-500/20 border border-sky-400/30">
              <h2 className="text-3xl font-bold mb-6 text-center">Ready to Explore Your Own "What If"?</h2>

              <p className="text-center text-white/80 mb-8 text-lg">
                You don't have to buy anything.<br/>
                You don't even have to give us your email.<br/>
                Just look. Just explore. Just think.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <a
                  href="/#quiz"
                  className="p-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 transition group"
                >
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    Step 1: Take the Quiz
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                  </h3>
                  <p className="text-sm text-white/70">The same 4-question quiz that recommended Type 15.1 to us. No email required.</p>
                </a>

                <a
                  href="/#residences"
                  className="p-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 transition group"
                >
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    Step 2: Explore Floor Plans
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                  </h3>
                  <p className="text-sm text-white/70">See exactly what each floor looks like. The transparency that convinced us.</p>
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20read%20Brian%20%26%20Jane%27s%20story%20and%20have%20questions...`}
                  className="p-4 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/30 transition group"
                >
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Ask Us Anything
                  </h3>
                  <p className="text-sm text-white/70">WhatsApp Brian & Jane directly. We've agreed to answer questions.</p>
                </a>

                <a
                  href="/"
                  className="p-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 transition group"
                >
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    Step 3: View Live Updates
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                  </h3>
                  <p className="text-sm text-white/70">Real construction photos updated weekly. Floor 35 is up now.</p>
                </a>
              </div>

              <div className="text-center pt-6 border-t border-white/10">
                <p className="text-2xl font-bold mb-2">The Question That Changed Everything For Us:</p>
                <p className="text-xl text-white/80 italic mb-6">
                  "In October 2027, would I rather be in my current situation or standing on the 40th floor of a Thai beachfront condo, even if it's not perfect?"
                </p>
                <p className="text-white/70">For us, the answer was clear. What's your answer?</p>
              </div>
            </section>

          </div>

          {/* Legal Disclaimers */}
          <footer className="mt-12 pt-8 border-t border-white/10">
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-amber-300 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
                Legal Disclaimer
              </h3>
              <div className="text-sm text-white/70 space-y-2">
                <p><strong>This is an advertorial.</strong> This content is sponsored and contains commercial messaging about Coral Reef Jomtien property development.</p>

                <p><strong>Not Financial Advice:</strong> This story represents the personal experience and opinions of Brian & Jane Thompson. It is not professional financial, legal, or investment advice. Property investment carries significant risks including loss of capital.</p>

                <p><strong>No Guarantees:</strong> Past performance or testimonials do not guarantee future results. Rental yields, capital appreciation, construction timelines, and all financial projections are estimates only and may not be achieved.</p>

                <p><strong>Do Your Own Research:</strong> Before making any property investment decision, especially in foreign markets, you must:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Conduct independent due diligence</li>
                  <li>Seek professional legal advice from qualified solicitors familiar with Thai property law</li>
                  <li>Obtain independent financial advice from FCA-regulated advisors</li>
                  <li>Visit the development site personally</li>
                  <li>Verify all claims independently</li>
                </ul>

                <p><strong>Risks Include:</strong> Currency fluctuation, construction delays, developer insolvency, lower than projected rental income, difficulty reselling, changes to foreign ownership laws, natural disasters, political instability, and total loss of investment.</p>

                <p><strong>Character Disclaimer:</strong> "Brian & Jane Thompson" are representative characters based on composite research of UK retirees considering Thai property investment. Specific details, quotes, and circumstances are illustrative.</p>

                <p><strong>Property Details:</strong> All property information, prices, specifications, and completion dates are subject to change. Contact the developer directly for current availability and terms.</p>

                <p className="pt-4 border-t border-white/20 text-xs">
                  <strong>Contact for Complaints:</strong> If you believe any information in this advertorial is misleading or inaccurate, please contact us via the website. We are committed to advertising standards compliance.
                </p>
              </div>
            </div>

            <div className="text-center text-sm text-white/50">
              <p className="mb-2">
                <em>Brian & Jane Thompson, 58 and 56, purchased Type 15.1 on Floor 40 at Coral Reef Jomtien in March 2025.
                The building is currently 38% complete with expected completion Q4 2027.</em>
              </p>
              <p className="text-xs">
                This is their story, not investment advice. Do your own research. But definitely do something.
              </p>
              <p className="mt-4 text-xs">
                © 2025 Coral Reef Jomtien Marketing. All rights reserved.
              </p>
            </div>

            <div className="mt-6 text-center">
              <a href="/" className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition">
                <ArrowLeft className="w-4 h-4" />
                Back to Property Listings
              </a>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
};

export default Advertorial;

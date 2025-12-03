import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = "447775978555";

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
              It's 7am on a Tuesday in October 2025. I'm standing at the Coral Reef Jomtien construction site, watching the sunrise paint the Gulf of Thailand gold while concrete trucks arrive for the day's pour on floor 21. In exactly 24 months, I'll be swimming in the 51st floor Beach View Pool at this same hour. My wife Jane and I just bought our retirement dream at 54% complete. Here's the honest story of how two skeptical Brits decided to bet on paradise – before it's even built.
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
                I still remember that first morning walk along Jomtien Beach Road. The sun is already warm at 7am (imagine that in January!). Thai ladies doing their morning exercises on the beach. The smell of proper coffee from the beachfront cafés – not a Costa in sight, but somehow better.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                But it was the expats who really opened our eyes.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                We met Derek at a beach bar. 72, from Manchester, he has been living in Jomtien for five years. "Best decision I ever made," he said, and you could see it in his face – proper color in his cheeks, none of that grey pallor we all carry through British winters.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                "What's it really like though?" Jane asked. "Some forums say never buy property here."
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
                "See that tower going up?" Derek pointed to a construction site with a sign reading "38% COMPLETE." "Copacabana's new project. If I was buying now, that's where I'd look. Their first building's proper quality – none of that corner-cutting nonsense."
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

            {/* Finding Coral Reef Jomtien */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Finding Coral Reef Jomtien: The Website That Actually Helped</h2>

              <p className="text-white/80 leading-relaxed mb-4">
                Back in Birmingham that February, we couldn't stop thinking about it.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                Jane had printed out everything – forum discussions, property guides. Our dining table looked like a detective's incident room. Red pen circles around warnings, green highlights on positives ("6-8% rental yields typical in Jomtien").
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                "Look at this," Jane said one evening, laptop open to jomtienproperty.com. "They have this personality quiz thing. Helps you find the right unit."
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                I was skeptical. Sounded like marketing fluff.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                But we tried it anyway.
              </p>

              <div className="my-6 p-6 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold mb-3">The Quiz Questions:</h4>
                <ul className="space-y-2 text-white/70">
                  <li><strong>Question 1:</strong> What's your main goal? We selected "Mix: Personal use + rent when away"</li>
                  <li><strong>Question 2:</strong> What's your priority? After some debate: "Best sea view possible"</li>
                  <li><strong>Question 3:</strong> Space needs? "Need space (family, guests, or office)" – the grandkids would visit, we hoped.</li>
                  <li><strong>Question 4:</strong> Budget? "Mid-range (5-10M THB)"</li>
                </ul>
              </div>

              <p className="text-white/80 leading-relaxed mb-4">
                The quiz recommended three units. But it was Type 15.1 that made Jane gasp.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                "Look at that floor plan, Brian. Two proper bedrooms. 67.6 square meters. And it goes up to floor 54..."
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                The images were stunning. Actual floor plans, not just artist impressions. You could click through every single floor from 5 to 54 (except 13 – Thai superstition).
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                But it was the Smart Floor Request feature that really impressed me. Each unit had specific floor recommendations:
              </p>

              <div className="my-6 p-6 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold mb-3">Smart Floor Recommendations:</h4>
                <ul className="space-y-2 text-white/70">
                  <li>🏊 <strong>Floor 6:</strong> "The Coral Pool - with Jacuzzi, Onsen, Sauna and Steam room"</li>
                  <li>🌅 <strong>Floor 51:</strong> "Sky Cantilever Pool - with stunning views and Pool Bar"</li>
                  <li>🔝 <strong>Floor 50+:</strong> "Premium Upper Floors - Best views and maximum privacy"</li>
                </ul>
              </div>

              <p className="text-white/80 leading-relaxed mb-4">
                Click any floor and it generates a WhatsApp message with all the details. Clever that – showed they'd thought about what buyers actually need to know.
              </p>

              <p className="text-white/80 leading-relaxed">
                "They're not hiding anything," I noted. "Look, you can see floor plans for every single level."
              </p>
            </section>

            {/* The Investigation Phase */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">The Investigation Phase: Forums, Fears, and Facts</h2>

              <p className="text-white/80 leading-relaxed mb-4">
                We weren't going to be those naïve Brits who get scammed. We'd read about the Emerald Palace disaster. First stop: The expat forums. Mixed bag, as expected.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                "Never buy off-plan in Thailand!" screamed one thread. "Thai condos depreciate," warned another. "Rental yields are fantasy," claimed a third.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                But then I found a different thread: "Copacabana Beach Jomtien – Two Years Later."
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                A British owner, username "PatongPete," had written a detailed review. The good: solid construction, facilities as promised, decent rental income. The bad: some maintenance issues, rental income took six months to stabilize. The verdict: "Would I buy again? Yes, but with realistic expectations."
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                That honesty mattered more than any glossy brochure.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                I emailed the website directly. I expected a sleazy salesman. Instead, got Rob, who started with:
              </p>

              {/* Pull Quote 3 */}
              <blockquote className="my-8 pl-6 border-l-4 border-teal-400 italic text-2xl text-white/90">
                "Right, let me be straight with you. The building won't be ready until late 2027 or early 2028 even. If you need instant returns, this isn't for you. This isn't a get-rich-quick investment. You're buying this for lifestyle and a modest income if you want to rent it out when you're not there."
                <footer className="text-base text-white/60 not-italic mt-2">— Rob, Sales Consultant (refreshingly honest)</footer>
              </blockquote>
            </section>

            {/* The Numbers That Actually Made Sense */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">The Numbers That Actually Made Sense</h2>

              <p className="text-white/80 leading-relaxed mb-4">
                Here's what we had: £250k in savings, paid-off house in Birmingham, and dreams bigger than our bank balance suggested.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                Rob sent over a proper spreadsheet – not marketing fluff, but actual numbers.
              </p>

              <div className="my-6 p-6 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold mb-3">Type 15.1 - What We Were Looking At:</h4>
                <ul className="space-y-2 text-white/70">
                  <li>• <strong>Price:</strong> 7.3M THB (£182,500 at 40 THB to pound)</li>
                  <li>• <strong>Size:</strong> 67.6 sqm (728 sq ft)</li>
                  <li>• <strong>Bedrooms:</strong> 2</li>
                  <li>• <strong>Available floors:</strong> Multiple between 7-54</li>
                  <li>• <strong>View:</strong> Direct Sea View</li>
                </ul>
              </div>

              <div className="my-6 p-6 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold mb-3">Payment Structure (This Mattered):</h4>
                <ul className="space-y-2 text-white/70">
                  <li>• <strong>Reservation:</strong> 50,000 THB (£1,250)</li>
                  <li>• <strong>Contract:</strong> 30% within 30 days (£54,750)</li>
                  <li>• <strong>Construction:</strong> 40% over 24 months (£73,000)</li>
                  <li>• <strong>Completion:</strong> 30% at handover Q4 2027 (£54,750)</li>
                </ul>
              </div>

              <p className="text-white/80 leading-relaxed mb-4">
                "You're not investing everything upfront," Rob explained. "And the staged payments mean you're protected – if something goes wrong, you're not fully exposed. But if you are comfortable paying up front, we can obtain a good discount for you."
              </p>

              <div className="my-6 p-6 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold mb-3">The Investment Angle:</h4>
                <ul className="space-y-2 text-white/70">
                  <li>• <strong>Estimated rental:</strong> 40,000-48,000 THB/month</li>
                  <li>• <strong>Realistic occupancy:</strong> 60-70%</li>
                  <li>• <strong>Management fees:</strong> 20% of rental</li>
                  <li>• <strong>NET yield:</strong> 5.5-6.5%</li>
                </ul>
              </div>

              <p className="text-white/80 leading-relaxed mb-4">
                "Not spectacular," Rob admitted. "But combine that with personal use value and Thai living costs, the real return is lifestyle."
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                Jane had been calculating. "So we could stay three months a year, rent it for nine months, and it basically pays for itself?"
              </p>

              <p className="text-white/80 leading-relaxed">
                "That's the idea. Plus, Jomtien's growing. Eastern Economic Corridor, new infrastructure. No promises, but it's better positioned than most Thai locations."
              </p>
            </section>

            {/* The Site Visit */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">The Site Visit That Changed Everything</h2>

              <p className="text-white/80 leading-relaxed mb-4">
                March 2025. We flew back to see for ourselves.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                The construction site was exactly as shown online – 38.94% complete. Not a marketing approximation, but posted on an official board with signatures from engineers.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                Rob and his partner Anchalee met us at the sales office. First stop: Copacabana Beach Jomtien, their completed building from 2019.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                Real residents. Real pools being used. Real gym with actual people working out. Not a ghost town like some horror stories suggested.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                "Been here two years," an older British woman told us by the pool. "A few teething problems at first, but they sorted them. Can't complain."
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                Then to the Coral Reef site itself. Hard hats on, up the construction lift to floor 15.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                The view – even at that height – was breathtaking. The Gulf of Thailand stretched endlessly. Koh Larn island sitting pretty in the distance.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                "Your unit would be there," Rob pointed up. "And the 51st floor is where the Sky Cantilever Pool structure's going in. See that steel framework?"
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                I could see it. Not imagine it – actually see it taking shape.
              </p>

              <p className="text-white/80 leading-relaxed">
                Jane was sold. I could tell by how she was already planning her next visit here.
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
                "Brian, we've been sensible our whole lives. Where's it gotten us? A cold house and aching joints. Maybe it's time to be a little mad."
                <footer className="text-base text-white/60 not-italic mt-2">— Jane Thompson, 56, making the call</footer>
              </blockquote>

              <p className="text-white/80 leading-relaxed mb-4">
                I called Rob. "We want floor 40 with direct sea views. Type 15.1."
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
                Every few weeks, we check the website's construction updates. Real photos, not renders. You can see the progress – floors 30 and 40 now have their pool structures in place. The shape of our future is literally taking form.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                We've been back three times to check. Each visit, it's taller. Each visit, more real.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                The Smart Floor Request system has been brilliant – we WhatsApp questions about specific floors and get responses with actual photos from that level.
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
            </section>

            {/* The Waiting Game */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">The Waiting Game: What We're Doing Until 2027</h2>

              <p className="text-white/80 leading-relaxed mb-4">
                Two years to wait. Here's how we're handling it:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-bold mb-3 text-sky-300">Practical Preparation:</h4>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Learning Thai on Duolingo (Jane's surprisingly good)</li>
                    <li>• Understanding the rental market (long-term vs Airbnb grey area)</li>
                    <li>• Setting aside the staged payments (£3,000/month)</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-bold mb-3 text-sky-300">Mental Preparation:</h4>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Reading everything about Jomtien</li>
                    <li>• Following Pattaya news for development updates</li>
                    <li>• Planning our 2028 life (three months there, rent the rest)</li>
                    <li>• Dealing with friends who think we're crackers</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <h4 className="font-bold mb-3 text-amber-300">The Hard Parts:</h4>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Watching the pound fluctuate against the baht</li>
                    <li>• Reading negative forum posts at 2am</li>
                    <li>• Explaining to our kids why we're doing this</li>
                    <li>• Paying for something we can't use yet</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <h4 className="font-bold mb-3 text-emerald-300">The Good Parts:</h4>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Having something exciting to look forward to</li>
                    <li>• Planning our future instead of accepting decline</li>
                    <li>• Knowing that in 24 months, we'll have options</li>
                    <li>• Feeling like we're writing our own story</li>
                    <li>• Prices have increased since we bought</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* The Doubts */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">The Doubts: Let's Be Honest</h2>

              <p className="text-white/80 leading-relaxed mb-4">
                Some nights, I lie awake thinking we've made a terrible mistake.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                What if we can't rent it out?<br/>
                What if we can't sell it?<br/>
                What if the developer has problems? It's happened before.<br/>
                What if we hate living there? Three weeks' holiday isn't living somewhere.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                But then I remember the alternative: nothing. Doing nothing. Staying in Birmingham, getting older, colder, greyer. That's not a "what if" – that's a certainty.
              </p>

              <p className="text-white/80 leading-relaxed">
                At least this gamble has upside. Even if everything goes averagely – building finishes, we get modest rental income, we enjoy our three months a year there – we're ahead of where we'd be in Birmingham.
              </p>
            </section>

            {/* Why Coral Reef Specifically */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Why Coral Reef Specifically?</h2>

              <p className="text-white/80 leading-relaxed mb-4">
                People ask why we didn't buy a resale, something already built.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                Simple: the new buildings are better. Better facilities, better design, better locations. The triple pool concept doesn't exist in most older buildings:
              </p>

              <div className="my-6 p-6 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold mb-3">The Triple Pool System:</h4>
                <ul className="space-y-3 text-white/70">
                  <li>🌊 <strong>Ground Floor Wave Pool</strong> - Wave pool, kids pool and garden with beach club atmosphere</li>
                  <li>🏊 <strong>6th Floor Coral Pool</strong> - With Jacuzzi, Japanese Onsen, Sauna and Steam room</li>
                  <li>🌅 <strong>51st Floor Sky Cantilever Pool</strong> - Rooftop infinity pool with Pool Bar</li>
                </ul>
              </div>

              <p className="text-white/80 leading-relaxed mb-4">
                The Smart Floor Request system showed they understood buyers' needs. Want to see exactly what floor 44 looks like? Click, WhatsApp, get photos. That level of detail gave us confidence.
              </p>

              <p className="text-white/80 leading-relaxed">
                And honestly? Being part of something from the beginning feels special. We're not inheriting someone else's dream – we're building our own.
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

              <p className="text-white/80 leading-relaxed mb-4">
                Our Birmingham friends think we're mad. "Buying off-plan in Thailand? You've lost it."
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                Maybe. But those same friends are planning their retirement around TV schedules and grocery discounts.
              </p>

              <p className="text-white/80 leading-relaxed">
                We're planning ours around pool schedules and sunset views.
              </p>

              {/* Pull Quote 5 */}
              <blockquote className="my-8 pl-6 border-l-4 border-teal-400 italic text-2xl text-white/90">
                "Who's really lost it?"
                <footer className="text-base text-white/60 not-italic mt-2">— Brian Thompson, 58, seven months in</footer>
              </blockquote>
            </section>

            {/* Your Move Section */}
            <section className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20">
              <h2 className="text-3xl font-bold mb-6">Your Move: Should You Consider This?</h2>

              <p className="text-white/80 leading-relaxed mb-4">
                I'm not saying you should buy at Coral Reef. That's your decision.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                But if you're sitting in the UK, reading this on another grey day, wondering if this is all there is... maybe it's not.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                Here's what I'd tell you:
              </p>

              <ul className="space-y-3 text-white/80 mb-6">
                <li>✓ <strong>The building is real.</strong> 38% complete, visible on Google Earth, registered with all the proper authorities.</li>
                <li>✓ <strong>The developer has a history.</strong> Copacabana Beach Jomtien stands completed. Not their first rodeo.</li>
                <li>✓ <strong>The money is staged.</strong> You're not handing it all over tomorrow. It's spread over 2.5 years.</li>
                <li>✓ <strong>The location is prime.</strong> Jomtien Beach, not some random field. The Eastern Economic Corridor is real development, not just promises.</li>
                <li>✓ <strong>The risk is manageable.</strong> Yes, you might lose money. But you definitely lose life staying in Birmingham forever.</li>
              </ul>
            </section>

            {/* The First Step */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">The First Step: Just Look</h2>

              <p className="text-white/80 leading-relaxed mb-4">
                Go to jomtienproperty.com. Take the quiz. It's actually useful – not just "what's your budget?" but proper lifestyle questions.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                Use the Smart Floor Request feature. Pick a unit, pick a floor, see what happens. The detail level surprised us.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                Look at the actual floor plans. All 49 floors (excluding 13). That transparency matters.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                Check the construction updates. Real photos, not renders.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                Then ask yourself: In October 2027, would I rather be in my current situation or standing on the 40th floor of a Thai beachfront condo, even if it's not perfect?
              </p>

              <p className="text-white/80 leading-relaxed">
                For us, the answer was clear.
              </p>
            </section>

            {/* 24 Months and Counting */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">24 Months and Counting</h2>

              <p className="text-white/80 leading-relaxed mb-4">
                I'm finishing this from our Jomtien hotel. Jane's on the balcony, binoculars trained on our construction site, counting floors like a kid counting days till Christmas.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                "I can see floor 36 going up!" she shouts.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                Four more floors and they'll be pouring our concrete. Our actual, physical future.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                Birmingham feels like someone else's life now. The broken boiler, the council tax, the grey existence – that was some other Brian and Jane. The ones who accepted that retirement meant decline.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                These Brian and Jane – the ones betting £182k on a Thai construction site – they believe retirement means renewal.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                24 months to go. 38% complete. 62% hope. 100% better than doing nothing.
              </p>

              <p className="text-white/80 leading-relaxed font-semibold">
                Maybe we're mad. But at least we're mad with a sea view.
              </p>
            </section>

            {/* Enhanced CTA Section */}
            <section className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-sky-500/20 to-teal-500/20 border border-sky-400/30">
              <h2 className="text-3xl font-bold mb-6 text-center">Ready to Explore Your Own Possibility?</h2>

              <p className="text-center text-white/80 mb-8 text-lg">
                Don't just dream about it. At least look.<br/>
                What's the worst that happens – you stay in Birmingham?<br/>
                That's the worst that happens anyway.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <a
                  href="/#quiz"
                  onClick={() => trackCTAClick('quiz')}
                  className="p-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 transition group"
                >
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    Find My Perfect Unit - Start the Quiz
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                  </h3>
                  <p className="text-sm text-white/70">Take the quiz we took. It actually helps clarify what you want, not just what you can afford.</p>
                </a>

                <a
                  href="/#residences"
                  onClick={() => trackCTAClick('floor_plans')}
                  className="p-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 transition group"
                >
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    Smart Floor Request
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                  </h3>
                  <p className="text-sm text-white/70">See exactly what's available on which floors. The detail level will surprise you.</p>
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20read%20Brian%20%26%20Jane%27s%20story%20and%20have%20questions...`}
                  onClick={() => trackWhatsAppClick('cta_section')}
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
                  onClick={() => trackCTAClick('website')}
                  className="p-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 transition group"
                >
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    The Website: jomtienproperty.com
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
                <em>Brian & Jane Thompson, 58 and 56, bought Type 15.1 on Floor 40 at Coral Reef Jomtien in March 2025.
                The building is currently 38% complete with expected completion Q4 2027. This is their story, not investment advice. Do your own research. But definitely do something.</em>
              </p>

              <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 text-left">
                <p className="font-bold text-white mb-2">P.S. – That boiler in Birmingham?</p>
                <p className="text-white/70 text-sm">
                  Still broken. The landlords who'll rent our house can deal with it. In 24 months, our biggest problem will be which of the 3 pools to swim in. These are the kinds of problems worth having.
                </p>
              </div>

              <p className="mt-6 text-xs">
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

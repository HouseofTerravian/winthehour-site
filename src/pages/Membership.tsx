import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Starter",
    subtitle: "Freshman Mode",
    tagline: "Learn the system. Build the habit.",
    icon: (
      <svg className="w-8 h-8 text-tier-starter" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 5v5l3.5 2" />
      </svg>
    ),
    price: "$0",
    period: "Forever free",
    features: [
      { text: "7-day streak tracking", included: true },
      { text: "Basic hourly check-ins", included: true },
      { text: "Morning + Evening Flow", included: true },
      { text: "Access to Deals Locker", included: true },
      { text: "Reflection journal locked", included: false },
    ],
    cta: "Start Training",
    highlighted: false,
    borderColor: "border-tier-starter",
    checkColor: "text-tier-starter",
    btnClass: "bg-tier-starter text-white hover:opacity-90",
  },
  {
    name: "Sovereign",
    subtitle: "Solo Starter Pack",
    tagline: "More control. More preparation.",
    icon: (
      <svg className="w-8 h-8 text-tier-sovereign" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4l3 12h14l3-12-5.5 6L12 2l-4.5 8L2 4z" /><path d="M5 16h14v4H5z" />
      </svg>
    ),
    price: "$12",
    period: "/mo",
    features: [
      { text: "Full 24-hour planning", included: true },
      { text: "Plan the next day", included: true },
      { text: "No ads", included: true },
      { text: "AI summaries + suggestions", included: true },
      { text: "Encrypted reflection journal", included: true },
      { text: "1x free streak recovery/mo", included: true },
    ],
    cta: "Go Sovereign",
    highlighted: true,
    borderColor: "border-tier-sovereign",
    checkColor: "text-tier-sovereign",
    btnClass: "bg-tier-sovereign text-white hover:opacity-90",
  },
  {
    name: "Elite",
    subtitle: "Group Game Ready",
    tagline: "Structure plus accountability.",
    icon: (
      <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    price: "$29",
    period: "/mo",
    features: [
      { text: "Everything in Sovereign", included: true },
      { text: "Join accountability groups", included: true },
      { text: "Advanced AI insights", included: true },
      { text: "Premium voice packs", included: true },
      { text: "30% OFF voice packs", included: true },
      { text: "Monthly summaries", included: true },
    ],
    cta: "Go Elite",
    highlighted: false,
    borderColor: "border-gold",
    checkColor: "text-gold",
    btnClass: "bg-gold text-charcoal hover:opacity-90",
  },
];

const faqs = [
  {
    q: "Can I try Sovereign before committing?",
    a: "Start with Starter free and upgrade anytime. Your data carries over seamlessly.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "You keep all your historical data. You'll just revert to Starter-tier features.",
  },
  {
    q: "Is there a team or family plan?",
    a: "Not yet — but it's on our roadmap. Contact us to let us know you're interested.",
  },
  {
    q: "How does the affiliate program work?",
    a: "Earn 30% recurring commissions on referrals. Campus, remote, and founder variants available. Include \"AFFILIATE\" in your contact message.",
  },
];

export default function Membership() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-28 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              Choose Your <span className="text-molten">Path</span>
            </h1>
            <p className="text-xl text-white/70">
              All tiers include core features · Upgrade anytime
            </p>
          </div>

          {/* Tier Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-slate rounded-3xl p-8 border-2 ${tier.borderColor} relative ${
                  tier.highlighted ? "border-4" : ""
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-tier-sovereign text-white px-6 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                    MOST POPULAR
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-white/70 uppercase tracking-wide mb-4">{tier.subtitle}</p>
                  <div className="text-4xl font-bold mb-2">
                    {tier.price}
                    {tier.period !== "Forever free" && (
                      <span className="text-lg">{tier.period}</span>
                    )}
                  </div>
                  <p className="text-white/70">
                    {tier.period === "Forever free" ? tier.period : "Billed monthly"}
                  </p>
                </div>

                <div className="bg-charcoal rounded-2xl p-5 mb-6">
                  <p className="text-white text-center italic opacity-80">"{tier.tagline}"</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li
                      key={feature.text}
                      className={`flex items-start gap-3 ${
                        feature.included ? "" : "opacity-50"
                      }`}
                    >
                      <span
                        className={`font-bold ${
                          feature.included ? tier.checkColor : ""
                        }`}
                      >
                        {feature.included ? "✓" : "✗"}
                      </span>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-full font-semibold text-center transition-all block whitespace-nowrap overflow-hidden ${tier.btnClass}`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Earned Tiers */}
          <div className="mt-16 bg-linear-to-br from-molten/20 to-tier-legendary/20 rounded-3xl p-12 border-2 border-molten">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Earned Tiers</h2>
              <p className="text-xl text-white/80">You don't buy these. You unlock them through proven consistency.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Elite+ */}
              <div className="bg-charcoal/80 rounded-2xl p-8 border-2 border-molten">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 border-2 border-molten rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-molten" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Elite+</h3>
                    <p className="text-sm text-molten uppercase tracking-wide">Captain Status</p>
                  </div>
                </div>
                <p className="text-white/80 mb-6 italic">"You don't buy this. You earn it."</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-molten font-bold">✓</span>
                    <span>Host accountability groups</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-molten font-bold">✓</span>
                    <span>Group stats + leader tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-molten font-bold">✓</span>
                    <span>Featured in search</span>
                  </li>
                </ul>
              </div>

              {/* Legendary */}
              <div className="bg-charcoal/80 rounded-2xl p-8 border-2 border-tier-legendary">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 border-2 border-tier-legendary rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-tier-legendary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C5.71 4 7 5.71 7 7v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7c0-1.29 1.29-3 2.5-3a2.5 2.5 0 0 1 0 5H18" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Legendary</h3>
                    <p className="text-sm text-tier-legendary uppercase tracking-wide">Legacy Tier</p>
                  </div>
                </div>
                <p className="text-white/80 mb-6 italic">"For users who don't just finish the workout — they define the program."</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-tier-legendary font-bold">✓</span>
                    <span>Early access to features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-tier-legendary font-bold">✓</span>
                    <span>Extended insight reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-tier-legendary font-bold">✓</span>
                    <span>Legacy builder recognition</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-white/70 mb-4">Need a custom enterprise solution?</p>
            <Link
              to="/contact"
              className="text-molten font-semibold hover:underline"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 px-6 bg-slate">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            Frequently <span className="text-molten">Asked</span>
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-charcoal rounded-3xl p-8 border-2 border-steel"
              >
                <h3 className="text-xl font-bold mb-4">{faq.q}</h3>
                <p className="text-white/70 leading-relaxed text-lg">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-charcoal text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Start winning your hours today
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Free to start. Powerful when you upgrade.
          </p>
          <Link
            to="/contact"
            className="bg-molten text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-molten/50 hover:bg-molten-dark transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap overflow-hidden"
          >
            Download Now
          </Link>
        </div>
      </section>
    </>
  );
}

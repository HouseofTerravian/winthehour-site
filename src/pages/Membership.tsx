import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Starter",
    icon: (
      <svg className="w-8 h-8 text-steel" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 5v5l3.5 2" />
      </svg>
    ),
    price: "$0",
    period: "Forever free",
    features: [
      { text: "7-day streak tracking", included: true },
      { text: "Basic hourly check-ins", included: true },
      { text: "Morning + Evening Flow", included: true },
      { text: "Reflection journal locked", included: false },
    ],
    cta: "Start Free",
    highlighted: false,
    borderColor: "border-steel",
    btnClass: "bg-steel text-white hover:bg-steel/80",
  },
  {
    name: "Sovereign",
    icon: (
      <svg className="w-8 h-8 text-molten" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4l3 12h14l3-12-5.5 6L12 2l-4.5 8L2 4z" /><path d="M5 16h14v4H5z" />
      </svg>
    ),
    price: "$12",
    period: "/mo",
    features: [
      { text: "Unlimited streak tracking", included: true },
      { text: "Full analytics dashboard", included: true },
      { text: "Mission archive + export", included: true },
      { text: "Encrypted reflection journal", included: true },
      { text: "1x free streak recovery/mo", included: true },
    ],
    cta: "Go Sovereign",
    highlighted: true,
    borderColor: "border-molten",
    btnClass: "bg-molten text-white hover:opacity-90",
  },
  {
    name: "Elite",
    icon: (
      <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    price: "$29",
    period: "/mo",
    features: [
      { text: "Everything in Sovereign", included: true },
      { text: "AI co-pilot suggestions", included: true },
      { text: "Premium voice packs", included: true },
      { text: "Priority support", included: true },
      { text: "Early feature access", included: true },
    ],
    cta: "Go Elite",
    highlighted: false,
    borderColor: "border-gold",
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
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-molten text-white px-6 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                    MOST POPULAR
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
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

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li
                      key={feature.text}
                      className={`flex items-start gap-3 ${
                        feature.included ? "" : "opacity-50"
                      }`}
                    >
                      <span
                        className={
                          feature.included
                            ? tier.name === "Elite"
                              ? "text-gold"
                              : "text-molten"
                            : ""
                        }
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
            className="bg-molten text-white px-12 py-5 rounded-full font-bold text-xl shadow-xl hover:opacity-90 transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap overflow-hidden"
          >
            Download Now
          </Link>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to start winning your hours.",
    features: [
      "Hourly check-ins",
      "Daily win/loss summary",
      "Basic streak tracking",
      "Guilt-free reset system",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$4.99",
    period: "/month",
    description: "For serious operators who want the full picture.",
    features: [
      "Everything in Free",
      "Advanced analytics dashboard",
      "Fire Block deep focus mode",
      "Custom hourly intervals",
      "Weekly & monthly reports",
      "Streak milestones & badges",
      "Priority support",
    ],
    cta: "Go Pro",
    highlighted: true,
  },
];

const merch = [
  {
    name: "Win The Hour Tee",
    description: "Premium cotton. Bold statement.",
    price: "$29.99",
  },
  {
    name: "Operator Hoodie",
    description: "Stay locked in. Stay warm.",
    price: "$54.99",
  },
  {
    name: "Focus Mug",
    description: "Fuel your winning hours.",
    price: "$14.99",
  },
  {
    name: "Hour Journal",
    description: "Analog tracking. Timeless format.",
    price: "$19.99",
  },
];

const digitalDownloads = [
  {
    name: "Hourly Planner Templates",
    description: "Printable templates for daily and weekly planning.",
    price: "Free",
  },
  {
    name: "Focus Block Guide",
    description: "A deep-dive PDF on mastering distraction-free hours.",
    price: "$4.99",
  },
  {
    name: "Productivity Toolkit",
    description: "Checklists, trackers, and frameworks in one bundle.",
    price: "$9.99",
  },
];

const faqs = [
  {
    q: "Can I try Pro before committing?",
    a: "Start with Free and upgrade anytime. Your data carries over seamlessly.",
  },
  {
    q: "What happens to my data if I cancel Pro?",
    a: "You keep all your historical data. You'll just revert to Free-tier features.",
  },
  {
    q: "Is there a team or family plan?",
    a: "Not yet — but it's on our roadmap. Contact us to let us know you're interested.",
  },
  {
    q: "When will merch be available?",
    a: "We're finalizing designs and suppliers now. Sign up for early access on our contact page.",
  },
];

export default function Store() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center px-6 sm:px-10 lg:px-20 xl:px-32 bg-charcoal">
        <div className="w-full max-w-[1600px] mx-auto text-center py-28">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Explore the{" "}
            <span className="text-orange">Universe</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl opacity-80 leading-relaxed max-w-3xl mx-auto">
            App plans, gear, and digital tools — everything to fuel your winning hours.
          </p>
        </div>
      </section>

      {/* App Plans */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-20 xl:px-32 bg-slate">
        <div className="w-full max-w-[1100px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center">
            App <span className="text-orange">Plans</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl p-10 md:p-14 border-2 transition-all duration-300 ${
                  tier.highlighted
                    ? "bg-gradient-to-b from-[#FF5E1A]/10 to-[#0B0C10] border-orange shadow-2xl shadow-[#FF5E1A]/10"
                    : "bg-charcoal border-steel shadow-lg"
                }`}
              >
                {tier.highlighted && (
                  <div className="inline-block bg-orange text-[#FFFFFF] px-4 py-1 rounded-full text-sm font-semibold mb-8">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-orange">
                    {tier.price}
                  </span>
                  <span className="text-lg opacity-60">{tier.period}</span>
                </div>
                <p className="opacity-70 mb-10 leading-relaxed text-lg">
                  {tier.description}
                </p>

                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="text-[#FF5E1A] mt-0.5 font-bold">
                        ✓
                      </span>
                      <span className="opacity-80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-full font-bold text-lg text-center transition-all transform hover:scale-105 active:scale-95 block whitespace-nowrap overflow-hidden ${
                    tier.highlighted
                      ? "bg-orange text-[#FFFFFF] shadow-xl hover:shadow-[#FF5E1A]/50 hover:bg-[#E55517]"
                      : "bg-slate text-[#FFFFFF] border-2 border-steel hover:border-orange hover:text-orange"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merch & Gear */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-20 xl:px-32 bg-charcoal">
        <div className="w-full max-w-[1200px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center">
            Merch &amp; <span className="text-orange">Gear</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {merch.map((item) => (
              <div
                key={item.name}
                className="bg-slate rounded-2xl p-8 border-2 border-steel text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 border-2 border-orange rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#FF5E1A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                <p className="opacity-70 text-sm mb-4">{item.description}</p>
                <p className="text-orange font-bold text-lg">{item.price}</p>
                <p className="text-xs opacity-50 mt-2">Coming Soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Downloads */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-20 xl:px-32 bg-slate">
        <div className="w-full max-w-[1100px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center">
            Digital <span className="text-orange">Downloads</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
            {digitalDownloads.map((item) => (
              <div
                key={item.name}
                className="bg-charcoal rounded-2xl p-8 border-2 border-steel"
              >
                <div className="w-12 h-12 mb-6 border-2 border-orange rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#FF5E1A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                <p className="opacity-70 text-sm mb-4">{item.description}</p>
                <p className="text-orange font-bold">{item.price}</p>
                <p className="text-xs opacity-50 mt-2">Coming Soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-20 xl:px-32 bg-charcoal text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-10">
            Start winning your hours today
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-10 md:mb-14 opacity-80 leading-relaxed">
            Free to start. Powerful when you upgrade.
          </p>
          <Link
            to="/contact"
            className="bg-orange text-[#FFFFFF] px-10 py-5 rounded-full font-bold text-lg sm:text-xl shadow-xl hover:shadow-[#FF5E1A]/50 hover:bg-[#E55517] transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap overflow-hidden"
          >
            Download Now
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-20 xl:px-32 bg-slate">
        <div className="w-full max-w-[1100px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center">
            Frequently <span className="text-orange">Asked</span>
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-charcoal rounded-3xl p-8 md:p-10 border-2 border-steel"
              >
                <h3 className="text-xl font-bold mb-4">{faq.q}</h3>
                <p className="opacity-70 leading-relaxed text-lg">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="opacity-60 mb-6 text-lg">Have more questions?</p>
            <Link
              to="/contact"
              className="text-orange font-semibold text-lg hover:underline transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

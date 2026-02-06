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

export default function Store() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-[#0B0C10]">
        <div className="w-full max-w-[1600px] mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Choose Your{" "}
            <span className="text-[#FF5E1A]">Plan</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl opacity-80 leading-relaxed max-w-3xl mx-auto">
            Start for free. Upgrade when you're ready for the full experience.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 xl:px-16 bg-[#1F2025]">
        <div className="w-full max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl p-8 md:p-10 lg:p-12 border transition-all duration-300 ${
                  tier.highlighted
                    ? "bg-gradient-to-b from-[#FF5E1A]/10 to-[#0B0C10] border-[#FF5E1A]/50 shadow-2xl shadow-[#FF5E1A]/10"
                    : "bg-[#0B0C10] border-[#3C4F65] shadow-lg"
                }`}
              >
                {tier.highlighted && (
                  <div className="inline-block bg-[#FF5E1A] text-[#FFFFFF] px-4 py-1 rounded-full text-sm font-semibold mb-6">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl md:text-3xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-[#FF5E1A]">{tier.price}</span>
                  <span className="text-lg opacity-60">{tier.period}</span>
                </div>
                <p className="opacity-70 mb-8 leading-relaxed">{tier.description}</p>

                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="text-[#FF5E1A] mt-0.5 font-bold">✓</span>
                      <span className="opacity-80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-full font-bold text-lg text-center transition-all transform hover:scale-105 active:scale-95 block whitespace-nowrap ${
                    tier.highlighted
                      ? "bg-[#FF5E1A] text-[#FFFFFF] shadow-xl hover:shadow-[#FF5E1A]/50 hover:bg-[#E55517]"
                      : "bg-[#1F2025] text-[#FFFFFF] border-2 border-[#3C4F65] hover:border-[#FF5E1A] hover:text-[#FF5E1A]"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 xl:px-16 bg-[#0B0C10] border-t border-[#1F2025]">
        <div className="w-full max-w-[1100px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-14 md:mb-20 text-center">
            Frequently <span className="text-[#FF5E1A]">Asked</span>
          </h2>

          <div className="space-y-6">
            {[
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
            ].map((faq) => (
              <div key={faq.q} className="bg-[#1F2025] rounded-2xl p-8 md:p-10 border border-[#3C4F65]">
                <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
                <p className="opacity-70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="opacity-60 mb-6">Have more questions?</p>
            <Link to="/contact" className="text-[#FF5E1A] font-semibold text-lg hover:underline transition-colors">
              Contact us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

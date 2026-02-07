import { Link } from "react-router-dom";

function CheckCircleIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      className={`${className} text-[#FF5E1A]`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

const features = [
  {
    title: "Hourly Check-Ins",
    description:
      "Set intentions for each hour and track your progress in real-time. Our intelligent reminder system keeps you focused without being intrusive.",
    bullets: [
      "Smart notifications at the start of each hour",
      "Quick 30-second reflection prompts",
      "Customizable check-in schedules",
    ],
    visualLabel: "Visual analytics dashboard",
  },
  {
    title: "Fire Blocks",
    description:
      "Designate distraction-free power hours. When you're in a Fire Block, nothing else exists — just you and the work that matters.",
    bullets: [
      "Deep focus mode with session tracking",
      "Distraction blocking reminders",
      "Performance metrics per block",
    ],
    visualLabel: "Deep focus activation",
  },
  {
    title: "Streak Tracking",
    description:
      "Build momentum with visual streak tracking. Watch your consistency grow day by day, hour by hour.",
    bullets: [
      "Daily, weekly, and monthly streak views",
      "Milestone celebrations and rewards",
      "Recovery mode for missed hours",
    ],
    visualLabel: "Goal achievement tracking",
  },
  {
    title: "Progress Dashboard",
    description:
      "Visual dashboards show you exactly where your time goes and how far you've come. No more guessing — just data-driven clarity.",
    bullets: [
      "Hourly, daily, and weekly breakdowns",
      "Win/loss ratio analytics",
      "Trend charts and personal insights",
    ],
    visualLabel: "Real-time performance insights",
  },
  {
    title: "Compassionate Reset",
    description:
      "Life happens. Our unique recovery system helps you bounce back without guilt or shame.",
    bullets: [
      "No punishment for missed hours",
      "Gentle restart prompts",
      "Progress preservation mode",
    ],
    visualLabel: "Mental wellness support",
  },
  {
    title: "Milestones & Badges",
    description:
      "Stack productive hours and unlock milestones as you level up. Momentum is the most powerful force in personal growth.",
    bullets: [
      "Achievement badges for consistency",
      "Unlockable tiers as you progress",
      "Shareable accomplishment cards",
    ],
    visualLabel: "Achievement unlocked",
  },
];

export default function Features() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center px-6 sm:px-10 lg:px-20 xl:px-32 bg-charcoal">
        <div className="w-full max-w-[1600px] mx-auto text-center py-28">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Everything You Need to{" "}
            <span className="text-orange">Win Your Hours</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl opacity-80 leading-relaxed max-w-3xl mx-auto">
            Built for people who are done wondering where their time went.
          </p>
        </div>
      </section>

      {/* Alternating Feature Sections */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-20 xl:px-32 bg-slate">
        <div className="w-full max-w-[1400px] mx-auto space-y-20 md:space-y-28">
          {features.map((feature, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={feature.title}
                className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                {/* Text side */}
                <div className={isReversed ? "md:order-2" : ""}>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-lg lg:text-xl opacity-80 leading-relaxed mb-8">
                    {feature.description}
                  </p>
                  <div className="space-y-4">
                    {feature.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-4">
                        <span className="text-[#FF5E1A] text-xl font-bold mt-0.5">
                          ✓
                        </span>
                        <span className="opacity-90 text-lg">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual block */}
                <div
                  className={`bg-charcoal rounded-3xl p-12 lg:p-16 border-2 border-steel ${
                    isReversed ? "md:order-1" : ""
                  }`}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 border-2 border-orange rounded-full flex items-center justify-center">
                      <CheckCircleIcon />
                    </div>
                  </div>
                  <p className="text-center text-lg opacity-70">
                    {feature.visualLabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-20 xl:px-32 bg-charcoal text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-10">
            Ready to experience it yourself?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-10 md:mb-14 opacity-80 leading-relaxed">
            Stop reading about productivity. Start living it.
          </p>
          <Link
            to="/store"
            className="bg-orange text-[#FFFFFF] px-8 py-4 rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-[#FF5E1A]/50 hover:bg-[#E55517] transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap overflow-hidden"
          >
            Download
          </Link>
        </div>
      </section>
    </>
  );
}

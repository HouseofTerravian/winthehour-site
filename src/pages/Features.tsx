import { Link } from "react-router-dom";

const features = [
  {
    icon: "⏰",
    title: "Hourly Check-Ins",
    description:
      "Set intentions for each hour and track your progress in real-time. Our intelligent reminder system keeps you focused without being intrusive.",
    bullets: [
      "Smart notifications at the start of each hour",
      "Quick 30-second reflection prompts",
      "Customizable check-in schedules",
    ],
    visual: { emoji: "📊", label: "Visual analytics dashboard" },
  },
  {
    icon: "🔥",
    title: "Fire Blocks",
    description:
      "Designate distraction-free power hours. When you're in a Fire Block, nothing else exists — just you and the work that matters.",
    bullets: [
      "Deep focus mode with session tracking",
      "Distraction blocking reminders",
      "Performance metrics per block",
    ],
    visual: { emoji: "🔥", label: "Deep focus activation" },
  },
  {
    icon: "🎯",
    title: "Streak Tracking",
    description:
      "Build momentum with visual streak tracking. Watch your consistency grow day by day, hour by hour.",
    bullets: [
      "Daily, weekly, and monthly streak views",
      "Milestone celebrations and rewards",
      "Recovery mode for missed hours",
    ],
    visual: { emoji: "🎯", label: "Goal achievement tracking" },
  },
  {
    icon: "📊",
    title: "Progress Dashboard",
    description:
      "Visual dashboards show you exactly where your time goes and how far you've come. No more guessing — just data-driven clarity.",
    bullets: [
      "Hourly, daily, and weekly breakdowns",
      "Win/loss ratio analytics",
      "Trend charts and personal insights",
    ],
    visual: { emoji: "📈", label: "Real-time performance insights" },
  },
  {
    icon: "💙",
    title: "Compassionate Reset",
    description:
      "Life happens. Our unique recovery system helps you bounce back without guilt or shame.",
    bullets: [
      "No punishment for missed hours",
      "Gentle restart prompts",
      "Progress preservation mode",
    ],
    visual: { emoji: "💙", label: "Mental wellness support" },
  },
  {
    icon: "🏆",
    title: "Milestones & Badges",
    description:
      "Stack productive hours and unlock milestones as you level up. Momentum is the most powerful force in personal growth.",
    bullets: [
      "Achievement badges for consistency",
      "Unlockable tiers as you progress",
      "Shareable accomplishment cards",
    ],
    visual: { emoji: "🏆", label: "Achievement unlocked" },
  },
];

export default function Features() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[100vh] flex items-center px-6 sm:px-10 lg:px-20 xl:px-32 bg-[#0B0C10]">
        <div className="w-full max-w-[1600px] mx-auto text-center py-40">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight">
            Everything You Need to{" "}
            <span className="text-[#FF5E1A]">Win Your Hours</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl opacity-80 leading-relaxed max-w-3xl mx-auto">
            Built for people who are done wondering where their time went.
          </p>
        </div>
      </section>

      {/* Alternating Feature Sections */}
      <section className="py-40 md:py-52 lg:py-64 px-6 sm:px-10 lg:px-20 xl:px-32 bg-[#1F2025]">
        <div className="w-full max-w-[1400px] mx-auto space-y-32 md:space-y-44 lg:space-y-56">
          {features.map((feature, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={feature.title}
                className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center"
              >
                {/* Text side */}
                <div className={isReversed ? "md:order-2" : ""}>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-lg lg:text-xl opacity-80 leading-relaxed mb-10">
                    {feature.description}
                  </p>
                  <div className="space-y-5">
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
                  className={`bg-[#0B0C10] rounded-3xl p-14 lg:p-20 border-2 border-[#3C4F65] ${
                    isReversed ? "md:order-1" : ""
                  }`}
                >
                  <div className="text-7xl lg:text-8xl text-center text-[#FF5E1A] mb-6">
                    {feature.visual.emoji}
                  </div>
                  <p className="text-center text-lg opacity-70">
                    {feature.visual.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 md:py-52 lg:py-64 px-6 sm:px-10 lg:px-20 xl:px-32 bg-[#0B0C10] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16">
            Ready to experience it yourself?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-16 md:mb-20 opacity-80 leading-relaxed">
            Stop reading about productivity. Start living it.
          </p>
          <Link
            to="/contact"
            className="bg-[#FF5E1A] text-[#FFFFFF] px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-[#FF5E1A]/50 hover:bg-[#E55517] transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";

const features = [
  {
    icon: "⏰",
    title: "Win Every Hour",
    description: "Check in hourly, set intentional goals, and track your progress. Each hour is a new opportunity to move the needle on what matters most.",
  },
  {
    icon: "📊",
    title: "Track Your Progress",
    description: "Visual dashboards show you exactly where your time goes and how far you've come. Review streaks, completed tasks, and focus time.",
  },
  {
    icon: "💙",
    title: "Recover with Compassion",
    description: "Break free from perfectionism and maintain momentum guilt-free. A bad hour doesn't mean a bad day — just reset and keep moving.",
  },
  {
    icon: "🔥",
    title: "Fire Blocks",
    description: "Designate distraction-free power hours. When you're in a Fire Block, nothing else exists — just you and the work that matters.",
  },
  {
    icon: "📱",
    title: "Hourly Check-Ins",
    description: "A simple prompt every hour asks: did you win this hour? It takes 5 seconds but builds unshakable awareness of how you spend your time.",
  },
  {
    icon: "🏆",
    title: "Streaks & Milestones",
    description: "Build winning streaks and unlock milestones as you stack productive hours. Momentum is the most powerful force in personal growth.",
  },
];

export default function Features() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[100vh] flex items-center px-6 sm:px-10 lg:px-20 xl:px-32 bg-[#0B0C10]">
        <div className="w-full max-w-[1600px] mx-auto text-center py-40">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-16 leading-tight">
            Everything You Need to{" "}
            <span className="text-[#FF5E1A]">Win Your Hours</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl opacity-80 leading-relaxed max-w-3xl mx-auto">
            Built for people who are done wondering where their time went.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-64 md:py-80 lg:py-96 px-6 sm:px-10 lg:px-20 xl:px-32 bg-[#1F2025]">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24 lg:gap-32">
            {features.map((feature) => (
              <div key={feature.title} className="feature-card bg-[#0B0C10] rounded-2xl p-16 lg:p-20 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#3C4F65]">
                <div className="feature-icon w-24 h-24 mx-auto mb-16 bg-[#3C4F65] rounded-full flex items-center justify-center text-4xl relative">
                  <span>{feature.icon}</span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-1 bg-[#FF5E1A] rotate-[-45deg]"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-8 text-center">{feature.title}</h3>
                <p className="text-center leading-relaxed opacity-70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-64 md:py-80 lg:py-96 px-6 sm:px-10 lg:px-20 xl:px-32 bg-[#0B0C10] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-14 md:mb-20">
            Ready to experience it yourself?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-20 md:mb-28 opacity-80 leading-relaxed">
            Stop reading about productivity. Start living it.
          </p>
          <Link to="/contact" className="bg-[#FF5E1A] text-[#FFFFFF] px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-[#FF5E1A]/50 hover:bg-[#E55517] transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap">
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}

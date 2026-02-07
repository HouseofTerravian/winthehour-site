import { Link } from "react-router-dom";

export default function Features() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              Powerful <span className="text-molten">Features</span>
            </h1>
            <p className="text-xl text-white/70">
              Everything you need to reclaim your time and dominate your day.
            </p>
          </div>

          {/* Morning & Evening Seals */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate rounded-3xl p-10 border-2 border-steel">
              <div className="w-16 h-16 mb-6 border-2 border-molten rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-molten" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4">Morning Seal</h3>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                Start your day with intention. Set your North Star for the next 24 hours. Lock in your mission before 9 AM and activate streak multipliers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-molten text-xl font-bold">✓</span>
                  <span>Goal setting + priority ranking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-molten text-xl font-bold">✓</span>
                  <span>Energy calibration check-in</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-molten text-xl font-bold">✓</span>
                  <span>Unlock 2x XP for the day</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate rounded-3xl p-10 border-2 border-steel">
              <div className="w-16 h-16 mb-6 border-2 border-molten rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-molten" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4">Evening Seal</h3>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                Reflect without judgment. Archive wins. Process lessons. Close your loop before midnight to preserve streaks and earn reflection rewards.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-molten text-xl font-bold">✓</span>
                  <span>Win/learn capture system</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-molten text-xl font-bold">✓</span>
                  <span>Encrypted journal storage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-molten text-xl font-bold">✓</span>
                  <span>Streak preservation lock-in</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Analytics Dashboard", desc: "Track hours won, XP earned, tier progress, and mission completion rates with visual clarity.", icon: "M3 3v18h18M9 17V9m4 8V5m4 12v-4" },
              { title: "Mission Archive", desc: "Complete daily, weekly, and seasonal missions. Export your history. Prove your discipline.", icon: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" },
              { title: "Silent Mode", desc: "Focus without interruption. Notifications pause. Your streak stays protected.", icon: "M18 9.5a3.5 3.5 0 1 0-7 0M11 5.5V3M21 12h-2M5 12H3M5.64 5.64l1.41 1.41M16.95 7.05l1.41-1.41" },
              { title: "Data Sovereignty", desc: "Export everything. Own your reflections. Encrypted storage. No surveillance.", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
              { title: "Tier System", desc: "Unlock Sovereign, Elite, and Legend tiers. Access exclusive modules and voice packs.", icon: "M6 9H4.5a2.5 2.5 0 0 1 0-5C5.71 4 7 5.71 7 7v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7c0-1.29 1.29-3 2.5-3a2.5 2.5 0 0 1 0 5H18" },
              { title: "Affiliate Program", desc: "Earn 30% recurring commissions. Campus, remote, and founder variants available.", icon: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M8.5 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM20 8v6M23 11h-6" },
            ].map((feature) => (
              <div key={feature.title} className="bg-slate rounded-2xl p-8 border-2 border-steel">
                <div className="w-12 h-12 mb-4 border-2 border-molten rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-molten" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={feature.icon} />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-white/80">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <Link
              to="/membership"
              className="bg-molten text-white px-12 py-5 rounded-full font-bold text-xl shadow-xl hover:opacity-90 transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap overflow-hidden"
            >
              Download
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

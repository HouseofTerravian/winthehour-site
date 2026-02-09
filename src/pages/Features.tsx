import { Link } from "react-router-dom";

const tiers = ["Starter", "Sovereign", "Elite", "Elite+", "Legendary"] as const;
const tierLabels = ["$0/mo", "$12/mo", "$29/mo", "Earned", "Earned"] as const;

type Row = { feature: string; access: string[] };
type Category = { name: string; rows: Row[] };

const featureMatrix: Category[] = [
  {
    name: "Daily Structure",
    rows: [
      { feature: "Plan up to 6 hours/day", access: ["✅", "🔒", "🔒", "🔒", "🔒"] },
      { feature: "Plan full 24-hour day", access: ["—", "✅", "✅", "✅", "✅"] },
      { feature: "Same-day planning only", access: ["✅", "✅", "✅", "✅", "✅"] },
      { feature: "Plan next day the night before", access: ["—", "✅", "✅", "✅", "✅"] },
      { feature: "Adaptive daily missions", access: ["—", "✅", "✅", "✅", "✅"] },
      { feature: "Morning Flow (intentional launch)", access: ["✅", "✅", "✅", "✅", "✅"] },
      { feature: "HH:55 Reset Ritual", access: ["✅", "✅", "✅", "✅", "✅"] },
      { feature: "Evening Flow (reflection close)", access: ["✅", "✅", "✅", "✅", "✅"] },
    ],
  },
  {
    name: "AI Coaching",
    rows: [
      { feature: "AI co-pilot suggestions", access: ["—", "✅", "✅", "✅", "✅"] },
      { feature: "AI morning planning assistant", access: ["—", "✅", "✅", "✅", "✅"] },
      { feature: "AI evening reflection synthesis", access: ["—", "✅", "✅", "✅", "✅"] },
      { feature: "Advanced pattern detection", access: ["—", "—", "✅", "✅", "✅"] },
      { feature: "AI Coach voices", access: ["—", "✅", "✅", "✅", "✅"] },
      { feature: "30% OFF voice packs", access: ["—", "—", "✅", "✅", "✅"] },
    ],
  },
  {
    name: "Accountability & Reflection",
    rows: [
      { feature: "7-day streak tracking", access: ["✅", "✅", "✅", "✅", "✅"] },
      { feature: "Unlimited streak tracking", access: ["—", "✅", "✅", "✅", "✅"] },
      { feature: "Encrypted reflection log", access: ["—", "✅", "✅", "✅", "✅"] },
      { feature: "1x free streak recovery per month", access: ["—", "✅", "✅", "✅", "✅"] },
    ],
  },
  {
    name: "Group & Social Tools",
    rows: [
      { feature: "Join community groups", access: ["—", "—", "✅", "✅", "✅"] },
      { feature: "Host groups / accountability cohorts", access: ["—", "—", "—", "✅", "✅"] },
      { feature: "Messaging system (AI-aided)", access: ["—", "—", "✅", "✅", "✅"] },
      { feature: "Social streak sync", access: ["—", "—", "✅", "✅", "✅"] },
      { feature: "Group stats dashboard", access: ["—", "—", "—", "✅", "✅"] },
    ],
  },
  {
    name: "Insights & Analytics",
    rows: [
      { feature: "Basic hourly check-ins", access: ["✅", "✅", "✅", "✅", "✅"] },
      { feature: "Full analytics dashboard", access: ["—", "✅", "✅", "✅", "✅"] },
      { feature: "Weekly + Monthly insights report", access: ["—", "—", "✅", "✅", "✅"] },
      { feature: "AI pattern mapping", access: ["—", "—", "✅", "✅", "✅"] },
    ],
  },
  {
    name: "Voice Packs & Personalization",
    rows: [
      { feature: "Premium voice packs", access: ["—", "—", "✅", "✅", "✅"] },
      { feature: "Language & tone customization", access: ["—", "✅", "✅", "✅", "✅"] },
      { feature: "Unlockable iconic voices", access: ["—", "—", "🔓", "🔓", "🔓"] },
    ],
  },
  {
    name: "Referral & Reward Systems",
    rows: [
      { feature: "Invite tracking", access: ["—", "✅", "✅", "✅", "✅"] },
      { feature: "Referral bonuses (monetary/symbolic)", access: ["—", "✅", "✅", "✅", "✅"] },
      { feature: "Affiliate earnings dashboard", access: ["—", "✅", "✅", "✅", "✅"] },
    ],
  },
  {
    name: "Tier Access & Legacy",
    rows: [
      { feature: "Upgrade via payment", access: ["✅", "✅", "✅", "—", "—"] },
      { feature: "Requires earned trust", access: ["—", "—", "—", "✅", "✅"] },
      { feature: "Cannot be bought", access: ["—", "—", "—", "✅", "✅"] },
      { feature: "Tier badge visibility", access: ["—", "✅", "✅", "✅", "✅"] },
      { feature: "Stewardship recognition", access: ["—", "—", "—", "✅", "✅"] },
      { feature: "Legacy mode: invite-only systems", access: ["—", "—", "—", "—", "✅"] },
    ],
  },
];

const featureUpdates = [
  {
    date: "Coming Soon",
    title: "AI Coach Voice Packs",
    description: "Choose from multiple AI coaching voices to guide your Morning Flow and Evening Flow rituals.",
  },
  {
    date: "Coming Soon",
    title: "Social Streak Sync",
    description: "Connect with accountability partners and sync streaks for shared momentum.",
  },
  {
    date: "Coming Soon",
    title: "Weekly Insights Report",
    description: "Automated weekly breakdowns of your productivity patterns, wins, and areas for growth.",
  },
];

export default function Features() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Powerful <span className="text-molten">Features</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Win The Hour!™ is a life-alignment system built for presence, reflection, earned responsibility, and joyful execution.
          </p>
        </div>
      </section>

      {/* Morning & Evening Flow */}
      <section className="py-28 px-6 bg-slate">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-charcoal rounded-3xl p-12 border-2 border-steel">
              <div className="w-16 h-16 mb-8 border-2 border-molten rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-molten" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6">Morning Flow</h3>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Start your day with intention. Set your North Star for the next 24 hours. Lock in your mission before 9 AM and activate streak multipliers.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-molten text-xl font-bold">✓</span>
                  <span>Goal setting + priority ranking</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-molten text-xl font-bold">✓</span>
                  <span>Energy calibration check-in</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-molten text-xl font-bold">✓</span>
                  <span>Unlock 2x XP for the day</span>
                </li>
              </ul>
            </div>

            <div className="bg-charcoal rounded-3xl p-12 border-2 border-steel">
              <div className="w-16 h-16 mb-8 border-2 border-molten rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-molten" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6">Evening Flow</h3>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Reflect without judgment. Archive wins. Process lessons. Close your loop before midnight to preserve streaks and earn reflection rewards.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-molten text-xl font-bold">✓</span>
                  <span>Win/learn capture system</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-molten text-xl font-bold">✓</span>
                  <span>Encrypted journal storage</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-molten text-xl font-bold">✓</span>
                  <span>Streak preservation lock-in</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-28 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
            Core <span className="text-molten">Capabilities</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Analytics Dashboard", desc: "Track hours won, XP earned, tier progress, and mission completion rates with visual clarity.", tagline: "No opinions. Just data.", icon: "M3 3v18h18M9 17V9m4 8V5m4 12v-4" },
              { title: "Mission Archive", desc: "Complete daily, weekly, and seasonal missions. Export your history. Prove your discipline.", tagline: "Discipline leaves receipts.", icon: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" },
              { title: "Silent Mode", desc: "Focus without interruption. Notifications pause. Your streak stays protected.", tagline: "This is about control — not overload.", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
              { title: "Data Sovereignty", desc: "Export everything. Own your reflections. Encrypted storage. No surveillance.", tagline: "Your data. Your rules.", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
              { title: "Tier System", desc: "Unlock Sovereign, Elite, and Legendary tiers. Access exclusive modules and voice packs.", tagline: "You don't buy status. You earn it.", icon: "M6 9H4.5a2.5 2.5 0 0 1 0-5C5.71 4 7 5.71 7 7v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7c0-1.29 1.29-3 2.5-3a2.5 2.5 0 0 1 0 5H18" },
              { title: "Affiliate Program", desc: "Earn 30% recurring commissions. Campus, remote, and founder variants available.", tagline: "Available at every tier.", icon: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M8.5 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM20 8v6M23 11h-6" },
            ].map((feature) => (
              <div key={feature.title} className="bg-slate rounded-2xl p-10 border-2 border-steel">
                <div className="w-12 h-12 mb-6 border-2 border-molten rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-molten" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={feature.icon} />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                <p className="text-white/80 leading-relaxed mb-4">{feature.desc}</p>
                <p className="text-molten italic text-sm">{feature.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="py-28 px-6 bg-slate">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Full Feature <span className="text-molten">Comparison</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              From the Starter tier's daily grounding to the Legendary tier's stewardship of legacy — every feature is calibrated to reflect earned responsibility.
            </p>
          </div>

          {/* Tier Header */}
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-6 gap-0 mb-2 px-4">
                <div className="col-span-1" />
                {tiers.map((tier, i) => (
                  <div
                    key={tier}
                    className={`text-center py-4 px-2 rounded-t-xl font-bold ${
                      tier === "Sovereign"
                        ? "bg-molten/20 text-molten"
                        : tier === "Elite"
                          ? "bg-gold/20 text-gold"
                          : tier === "Elite+" || tier === "Legendary"
                            ? "bg-white/5 text-white/60"
                            : "bg-white/5 text-white"
                    }`}
                  >
                    <div className="text-lg">{tier}</div>
                    <div className="text-sm opacity-70">{tierLabels[i]}</div>
                  </div>
                ))}
              </div>

              {/* Categories */}
              {featureMatrix.map((category) => (
                <div key={category.name} className="mb-8">
                  <div className="bg-charcoal rounded-xl px-6 py-4 mb-2 border-2 border-steel">
                    <h3 className="text-lg font-bold text-molten">{category.name}</h3>
                  </div>
                  {category.rows.map((row, rowIdx) => (
                    <div
                      key={row.feature}
                      className={`grid grid-cols-6 gap-0 px-4 py-3 ${
                        rowIdx % 2 === 0 ? "bg-charcoal/50" : "bg-charcoal/30"
                      } rounded-lg`}
                    >
                      <div className="col-span-1 flex items-center text-sm text-white/90 pr-4">
                        {row.feature}
                      </div>
                      {row.access.map((val, i) => (
                        <div key={i} className="text-center flex items-center justify-center text-lg">
                          {val}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/50 text-sm">
              🔒 = Included but limited at this tier · 🔓 = Unlockable · Elite+ and Legendary tiers cannot be purchased — they are earned through sustained discipline.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Updates */}
      <section className="py-28 px-6 bg-charcoal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
            Feature <span className="text-molten">Updates</span>
          </h2>

          <div className="space-y-8">
            {featureUpdates.map((update) => (
              <div
                key={update.title}
                className="bg-slate rounded-3xl p-10 border-2 border-steel"
              >
                <div className="inline-block mb-4 px-3 py-1 bg-molten/20 border border-molten rounded-full text-molten text-xs font-semibold">
                  {update.date}
                </div>
                <h3 className="text-2xl font-bold mb-4">{update.title}</h3>
                <p className="text-white/70 leading-relaxed text-lg">{update.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-slate text-center border-t border-steel">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Ready to experience it yourself?
          </h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Stop reading about productivity. Start living it.
          </p>
          <Link
            to="/membership"
            className="bg-molten text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-molten/50 hover:bg-molten-dark transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap overflow-hidden"
          >
            Download
          </Link>
        </div>
      </section>
    </>
  );
}

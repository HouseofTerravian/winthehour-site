import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HERO_IMAGE = "/wth-hero-female-web.jpg";
const TESTIMONIAL_IMAGE = "/wth-hero-male-web.jpg";

export default function Home() {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroTextRef.current) {
      heroTextRef.current.classList.remove("opacity-0");
      heroTextRef.current.classList.add("animate-fadeInLeft");
    }
    if (heroImageRef.current) {
      heroImageRef.current.classList.remove("opacity-0");
      heroImageRef.current.classList.add("animate-scaleIn");
    }
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-charcoal via-slate to-steel min-h-screen pt-24 px-6 flex items-center">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center py-12">
          <div ref={heroTextRef} className="opacity-0">
            <div className="inline-block mb-4 px-4 py-2 bg-molten/20 border border-molten rounded-full text-molten text-sm font-semibold">
              GAMIFIED PRODUCTIVITY
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              Reclaim Your Time.<br />
              <span className="text-molten">Win Every Hour.</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Join high-performers building streaks, completing missions, and mastering their days through disciplined momentum.
            </p>
            <Link
              to="/membership"
              className="bg-molten text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:opacity-90 transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap overflow-hidden glow-pulse"
            >
              Start Free
            </Link>
          </div>

          <div ref={heroImageRef} className="relative opacity-0 delay-200">
            <img
              src={HERO_IMAGE}
              alt="Win The Hour Success Story"
              className="w-full h-auto rounded-3xl shadow-2xl border-2 border-steel"
            />
          </div>
        </div>
      </section>

      {/* Social Proof Stat Bar */}
      <section className="py-12 px-6 bg-slate border-y border-steel">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-molten">10,000+</div>
              <div className="text-white/70">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-molten">1M+</div>
              <div className="text-white/70">Hours Won</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-molten">347</div>
              <div className="text-white/70">Day Streaks</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-molten">4.9★</div>
              <div className="text-white/70">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — 3 Pillars */}
      <section className="py-20 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              How <span className="text-molten">WTH!</span> Works
            </h2>
            <p className="text-xl text-white/70">Three pillars of sovereign productivity</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card bg-slate rounded-2xl p-8 border-2 border-steel hover:shadow-2xl transition-all duration-300">
              <div className="feature-icon w-16 h-16 mx-auto mb-6 border-2 border-molten rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-molten" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">Hourly Check-Ins</h3>
              <p className="font-semibold text-molten mb-3 text-center">Intentional Focus</p>
              <p className="text-center leading-relaxed opacity-70">
                Set goals each hour. Reflect in 30 seconds. Build awareness of where your time actually goes.
              </p>
            </div>

            <div className="feature-card bg-slate rounded-2xl p-8 border-2 border-steel hover:shadow-2xl transition-all duration-300">
              <div className="feature-icon w-16 h-16 mx-auto mb-6 border-2 border-molten rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-molten" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">Streak Mastery</h3>
              <p className="font-semibold text-molten mb-3 text-center">Gamified Accountability</p>
              <p className="text-center leading-relaxed opacity-70">
                Daily streaks unlock XP, badges, and tier upgrades. Visualize your consistency. Celebrate milestones.
              </p>
            </div>

            <div className="feature-card bg-slate rounded-2xl p-8 border-2 border-steel hover:shadow-2xl transition-all duration-300 sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none">
              <div className="feature-icon w-16 h-16 mx-auto mb-6 border-2 border-molten rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-molten" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">Compassionate Reset</h3>
              <p className="font-semibold text-molten mb-3 text-center">Resilience Built In</p>
              <p className="text-center leading-relaxed opacity-70">
                Life happens. One free streak recovery per month. Gentle restart prompts. Progress preserved, shame removed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6 bg-linear-to-br from-steel via-slate to-charcoal">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 sm:p-14 border-2 border-steel">
            <div className="text-5xl text-molten mb-6 leading-none">"</div>
            <p className="text-lg lg:text-xl leading-relaxed mb-8">
              Either get this app or be a loser! I used to wonder what I did
              with my days, or, even worse, on productive days still feel I
              wasn't doing enough! Now, my stats don't lie! I love the feeling
              of success and satisfaction this app brings.
            </p>
            <p className="text-xl font-bold">Adam S.</p>
            <p className="text-white/70">Founder · 347-Day Streak</p>
          </div>

          <div className="relative">
            <img
              src={TESTIMONIAL_IMAGE}
              alt="Professional Success with Win The Hour"
              className="w-full h-auto rounded-3xl shadow-2xl border-2 border-steel"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-charcoal text-center border-y border-steel">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Win Your Day?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Join 10,000+ high-performers reclaiming time sovereignty.
          </p>
          <Link
            to="/membership"
            className="bg-molten text-white px-12 py-5 rounded-full font-bold text-xl shadow-xl hover:opacity-90 transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap overflow-hidden"
          >
            Join The Movement
          </Link>
        </div>
      </section>
    </>
  );
}

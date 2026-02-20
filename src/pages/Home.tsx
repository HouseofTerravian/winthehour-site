import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { APP_URL } from "../config";

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
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center py-16">
          <div ref={heroTextRef} className="opacity-0">
            <div className="inline-block mb-6 px-4 py-2 bg-molten/20 border border-molten rounded-full text-molten text-sm font-semibold">
              GAMIFIED PRODUCTIVITY
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-8 leading-tight">
              Reclaim Your Time.<br />
              <span className="text-molten">Win Every Hour.</span>
            </h1>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Join high-performers building streaks, completing missions, and mastering their days through disciplined momentum.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="/membership"
                className="bg-molten text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-molten/50 hover:bg-molten-dark transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap overflow-hidden glow-pulse"
              >
                Start Free
              </Link>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-molten text-molten px-8 py-4 rounded-full font-bold text-lg hover:bg-molten hover:text-white transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap overflow-hidden"
              >
                Get the App
              </a>
            </div>
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

      {/* Why People Win — 3 Pillars */}
      <section className="py-28 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Why People <span className="text-molten">Win</span>
            </h2>
            <p className="text-xl text-white/70">Three pillars of sovereign productivity</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="feature-card bg-slate rounded-2xl p-10 border-2 border-steel hover:shadow-2xl transition-all duration-300">
              <div className="feature-icon w-16 h-16 mx-auto mb-8 border-2 border-molten rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-molten" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Hourly Check-Ins</h3>
              <p className="font-semibold text-molten mb-4 text-center">Intentional Focus</p>
              <p className="text-center leading-relaxed opacity-70">
                Set goals each hour. Reflect in 30 seconds. Build awareness of where your time actually goes.
              </p>
            </div>

            <div className="feature-card bg-slate rounded-2xl p-10 border-2 border-steel hover:shadow-2xl transition-all duration-300">
              <div className="feature-icon w-16 h-16 mx-auto mb-8 border-2 border-molten rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-molten" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Streak Mastery</h3>
              <p className="font-semibold text-molten mb-4 text-center">Gamified Accountability</p>
              <p className="text-center leading-relaxed opacity-70">
                Daily streaks unlock XP, badges, and tier upgrades. Visualize your consistency. Celebrate milestones.
              </p>
            </div>

            <div className="feature-card bg-slate rounded-2xl p-10 border-2 border-steel hover:shadow-2xl transition-all duration-300 sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none">
              <div className="feature-icon w-16 h-16 mx-auto mb-8 border-2 border-molten rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-molten" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Compassionate Reset</h3>
              <p className="font-semibold text-molten mb-4 text-center">Resilience Built In</p>
              <p className="text-center leading-relaxed opacity-70">
                Life happens. One free streak recovery per month. Gentle restart prompts. Progress preserved, shame removed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-28 px-6 bg-linear-to-br from-steel via-slate to-charcoal">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 sm:p-16 border-2 border-steel">
            <div className="text-5xl text-molten mb-8 leading-none">"</div>
            <p className="text-lg lg:text-xl leading-relaxed mb-10">
              Either get this app or be a loser! I used to wonder what I did
              with my days, or, even worse, on productive days still feel I
              wasn't doing enough! Now, my stats don't lie! I love the feeling
              of success and satisfaction this app brings.
            </p>
            <p className="text-xl font-bold">Adam S.</p>
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
      <section className="py-28 px-6 bg-charcoal text-center border-y border-steel">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Ready to Win Your Day?
          </h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Win The Hour!™ is more than a planner. It's a ritual-based execution engine designed to help you become who you're meant to be — one hour at a time.
          </p>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link
              to="/membership"
              className="bg-molten text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-molten/50 hover:bg-molten-dark transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap overflow-hidden"
            >
              Join The Movement
            </Link>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-molten text-molten px-8 py-4 rounded-full font-bold text-lg hover:bg-molten hover:text-white transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap overflow-hidden"
            >
              Get the App
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

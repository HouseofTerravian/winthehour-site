import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HERO_IMAGE = "/wth-hero-female-web.jpg";
const TESTIMONIAL_IMAGE = "/wth-hero-male-web.jpg";

function CheckCircleIcon() {
  return (
    <svg
      className="w-10 h-10 text-[#FF5E1A]"
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
      <section className="min-h-screen flex items-center px-6 sm:px-10 lg:px-20 xl:px-32 bg-charcoal">
        <div className="w-full max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center py-28">
          <div ref={heroTextRef} className="opacity-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Transform Your Life,{" "}
              <span className="text-orange">One Hour at a Time</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-10 opacity-80 leading-relaxed max-w-xl">
              Win The Hour!™ helps you achieve your goals by focusing on hourly
              targets and making every minute count.
            </p>
            <Link
              to="/contact"
              className="bg-orange text-[#FFFFFF] px-8 py-4 rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-[#FF5E1A]/50 hover:bg-[#E55517] transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap overflow-hidden"
            >
              Get Started
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

      {/* Features Preview */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-20 xl:px-32 bg-slate">
        <div className="w-full max-w-[1600px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 md:mb-20 text-center">
            Why People <span className="text-orange">Win</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <div className="feature-card bg-charcoal rounded-2xl p-10 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-steel">
              <div className="feature-icon w-16 h-16 mx-auto mb-8 border-2 border-orange rounded-full flex items-center justify-center">
                <CheckCircleIcon />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Win Every Hour
              </h3>
              <p className="text-center leading-relaxed opacity-70">
                Check in hourly, set intentional goals, and track your progress.
              </p>
            </div>

            <div className="feature-card bg-charcoal rounded-2xl p-10 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-steel">
              <div className="feature-icon w-16 h-16 mx-auto mb-8 border-2 border-orange rounded-full flex items-center justify-center">
                <CheckCircleIcon />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Track Your Progress
              </h3>
              <p className="text-center leading-relaxed opacity-70">
                Review your streaks, completed tasks, and focus time.
              </p>
            </div>

            <div className="feature-card bg-charcoal rounded-2xl p-10 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-steel sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none">
              <div className="feature-icon w-16 h-16 mx-auto mb-8 border-2 border-orange rounded-full flex items-center justify-center">
                <CheckCircleIcon />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Recover with Compassion
              </h3>
              <p className="text-center leading-relaxed opacity-70">
                Break free from perfectionism and maintain momentum guilt-free.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              to="/features"
              className="bg-orange text-[#FFFFFF] px-8 py-4 rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-[#FF5E1A]/50 hover:bg-[#E55517] transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap overflow-hidden"
            >
              Join The Movement
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-20 xl:px-32 bg-gradient-to-br from-[#3C4F65] via-[#1F2025] to-[#0B0C10]">
        <div className="w-full max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 sm:p-14 md:p-16 border-2 border-steel">
            <div className="text-5xl lg:text-6xl text-orange mb-8 leading-none">
              "
            </div>
            <p className="text-lg lg:text-xl leading-relaxed mb-10">
              Either get this app or be a loser! I used to wonder what I did
              with my days, or, even worse, on productive days still feel I
              wasn't doing enough! Now, my stats don't lie! I love the feeling
              of success and satisfaction this app brings.
            </p>
            <p className="text-xl lg:text-2xl font-bold">Adam S.</p>
          </div>

          <div className="relative">
            <img
              src={TESTIMONIAL_IMAGE}
              alt="Professional Success with Win The Hour"
              className="w-full h-auto rounded-3xl shadow-2xl border-2 border-steel"
            />
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            to="/store"
            className="bg-orange text-[#FFFFFF] px-8 py-4 rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-[#FF5E1A]/50 hover:bg-[#E55517] transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap overflow-hidden"
          >
            Download
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-20 xl:px-32 bg-charcoal text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-10">
            Ready to elevate your productivity?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-10 md:mb-14 opacity-80 leading-relaxed">
            Join thousands who are transforming their days, one hour at a time.
          </p>
          <Link
            to="/store"
            className="bg-orange text-[#FFFFFF] px-10 py-5 rounded-full font-bold text-lg sm:text-xl shadow-xl hover:shadow-[#FF5E1A]/50 hover:bg-[#E55517] transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap overflow-hidden"
          >
            Download Now
          </Link>
        </div>
      </section>
    </>
  );
}

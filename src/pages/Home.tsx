import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HERO_IMAGE = "/wth-hero-female.png";
const TESTIMONIAL_IMAGE = "/wth-hero-male.png";

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
      {/* Hero — full viewport */}
      <section className="min-h-[120vh] flex items-center px-6 sm:px-10 lg:px-20 xl:px-32 bg-[#0B0C10]">
        <div className="w-full max-w-[1600px] mx-auto grid md:grid-cols-2 gap-20 lg:gap-32 items-center py-32">
          <div ref={heroTextRef} className="opacity-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight">
              Transform Your Life,{" "}
              <span className="text-[#FF5E1A]">One Hour at a Time</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-14 opacity-80 leading-relaxed max-w-xl">
              Win The Hour!™ helps you achieve your goals by focusing on hourly
              targets and making every minute count.
            </p>
            <Link
              to="/contact"
              className="bg-[#FF5E1A] text-[#FFFFFF] px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-[#FF5E1A]/50 hover:bg-[#E55517] transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap"
            >
              Join the Movement
            </Link>
          </div>

          <div ref={heroImageRef} className="relative opacity-0 delay-200">
            <img
              src={HERO_IMAGE}
              alt="Win The Hour Success Story"
              className="w-full h-auto rounded-3xl shadow-2xl border border-[#3C4F65]"
            />
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-40 md:py-52 lg:py-64 px-6 sm:px-10 lg:px-20 xl:px-32 bg-[#1F2025]">
        <div className="w-full max-w-[1600px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-28 md:mb-36 text-center">
            Why People <span className="text-[#FF5E1A]">Win</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
            <div className="feature-card bg-[#0B0C10] rounded-2xl p-12 lg:p-16 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#3C4F65]">
              <div className="feature-icon w-24 h-24 mx-auto mb-10 bg-[#3C4F65] rounded-full flex items-center justify-center text-4xl relative">
                <span>⏰</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-1 bg-[#FF5E1A] rotate-[-45deg]"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Win Every Hour
              </h3>
              <p className="text-center leading-relaxed opacity-70">
                Check in hourly, set intentional goals, and track your progress.
              </p>
            </div>

            <div className="feature-card bg-[#0B0C10] rounded-2xl p-12 lg:p-16 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#3C4F65]">
              <div className="feature-icon w-24 h-24 mx-auto mb-10 bg-[#3C4F65] rounded-full flex items-center justify-center text-4xl relative">
                <span>📊</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-1 bg-[#FF5E1A] rotate-[-45deg]"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Track Your Progress
              </h3>
              <p className="text-center leading-relaxed opacity-70">
                Review your streaks, completed tasks, and focus time.
              </p>
            </div>

            <div className="feature-card bg-[#0B0C10] rounded-2xl p-12 lg:p-16 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#3C4F65] sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none">
              <div className="feature-icon w-24 h-24 mx-auto mb-10 bg-[#3C4F65] rounded-full flex items-center justify-center text-4xl relative">
                <span>💙</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-1 bg-[#FF5E1A] rotate-[-45deg]"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Recover with Compassion
              </h3>
              <p className="text-center leading-relaxed opacity-70">
                Break free from perfectionism and maintain momentum guilt-free.
              </p>
            </div>
          </div>

          <div className="text-center mt-28 md:mt-36">
            <Link
              to="/features"
              className="text-[#FF5E1A] font-semibold text-lg hover:underline transition-colors"
            >
              Explore all features →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-40 md:py-52 lg:py-64 px-6 sm:px-10 lg:px-20 xl:px-32 bg-gradient-to-br from-[#3C4F65] via-[#1F2025] to-[#0B0C10]">
        <div className="w-full max-w-[1600px] mx-auto grid md:grid-cols-2 gap-20 lg:gap-32 items-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 sm:p-16 md:p-20 lg:p-24 border border-[#3C4F65]">
            <div className="text-6xl lg:text-7xl text-[#FF5E1A] mb-10 leading-none">
              "
            </div>
            <p className="text-lg lg:text-xl leading-relaxed mb-12">
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
              className="w-full h-auto rounded-3xl shadow-2xl border border-[#3C4F65]"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 md:py-52 lg:py-64 px-6 sm:px-10 lg:px-20 xl:px-32 bg-[#0B0C10] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 md:mb-14">
            Ready to elevate your productivity?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-14 md:mb-20 opacity-80 leading-relaxed">
            Join thousands who are transforming their days, one hour at a time.
          </p>
          <Link
            to="/contact"
            className="bg-[#FF5E1A] text-[#FFFFFF] px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-[#FF5E1A]/50 hover:bg-[#E55517] transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap"
          >
            Join The Movement
          </Link>
        </div>
      </section>
    </>
  );
}

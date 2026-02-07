import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const HERO_IMAGE = "/wth-hero-female-web.jpg";
const TESTIMONIAL_IMAGE = "/wth-hero-male-web.jpg";

export default function WinTheHourLanding() {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="bg-[#0B0C10] text-[#FFFFFF] min-h-screen w-full overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0B0C10]/95 backdrop-blur-lg z-50 border-b border-[#1F2025]">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold text-[#FFFFFF]">
            <span className="text-2xl">✓</span>
            <span>Win The Hour!™</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#home" className="text-[#FFFFFF] hover:text-[#FF5E1A] transition-colors">
              Home
            </a>
            <a href="#features" className="text-[#FFFFFF] hover:text-[#FF5E1A] transition-colors">
              Features
            </a>
            <a href="#about" className="text-[#FFFFFF] hover:text-[#FF5E1A] transition-colors">
              About
            </a>
            <a href="#contact" className="text-[#FFFFFF] hover:text-[#FF5E1A] transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden md:inline-block bg-[#FF5E1A] text-[#FFFFFF] px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-[#FF5E1A]/50 hover:bg-[#E55517] transition-all transform hover:scale-105 active:scale-95">
              Get Started
            </a>
            <button
              className="md:hidden p-2 text-[#FFFFFF] hover:text-[#FF5E1A] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B0C10]/95 backdrop-blur-lg border-b border-[#1F2025]">
            <div className="flex flex-col px-6 py-6 gap-5">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-lg text-[#FFFFFF] hover:text-[#FF5E1A] transition-colors">
                Home
              </a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-lg text-[#FFFFFF] hover:text-[#FF5E1A] transition-colors">
                Features
              </a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg text-[#FFFFFF] hover:text-[#FF5E1A] transition-colors">
                About
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg text-[#FFFFFF] hover:text-[#FF5E1A] transition-colors">
                Contact
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-[#FF5E1A] text-[#FFFFFF] px-6 py-3 rounded-full font-semibold text-center shadow-lg hover:bg-[#E55517] transition-all mt-2">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-28 md:pt-36 px-6 sm:px-8 lg:px-12 xl:px-16 bg-[#0B0C10]">
        <div className="w-full max-w-[1600px] mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center py-16 md:py-24">
          <div ref={heroTextRef} className="opacity-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-[#FFFFFF]">
              Transform Your Life,{" "}
              <span className="text-[#FF5E1A]">One Hour at a Time</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-[#FFFFFF] mb-10 opacity-90 leading-relaxed">
              Win The Hour!™ helps you achieve your goals by focusing on hourly targets and making every minute count.
            </p>
            <a href="#contact" className="bg-[#FF5E1A] text-[#FFFFFF] px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-[#FF5E1A]/50 hover:bg-[#E55517] transition-all transform hover:scale-105 active:scale-95 inline-block">
              Join the Movement
            </a>
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

      {/* Features Section */}
      <section id="features" className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 xl:px-16 bg-[#1F2025]">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
            {/* Feature 1 */}
            <div className="feature-card bg-[#0B0C10] rounded-2xl p-8 md:p-10 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#3C4F65]">
              <div className="feature-icon w-24 h-24 mx-auto mb-8 bg-[#3C4F65] rounded-full flex items-center justify-center text-4xl relative">
                <span>⏰</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-1 bg-[#FF5E1A] rotate-[-45deg]"></div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4 text-center">
                Win Every Hour
              </h3>
              <p className="font-semibold text-[#FFFFFF] mb-3 text-center opacity-90">
                Stay focused and accountable.
              </p>
              <p className="text-[#FFFFFF] text-center leading-relaxed opacity-70">
                Check in hourly, set intentional goals, and track your progress.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card bg-[#0B0C10] rounded-2xl p-8 md:p-10 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#3C4F65]">
              <div className="feature-icon w-24 h-24 mx-auto mb-8 bg-[#3C4F65] rounded-full flex items-center justify-center text-4xl relative">
                <span>📊</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-1 bg-[#FF5E1A] rotate-[-45deg]"></div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4 text-center">
                Track Your Progress
              </h3>
              <p className="font-semibold text-[#FFFFFF] mb-3 text-center opacity-90">
                See your achievements grow.
              </p>
              <p className="text-[#FFFFFF] text-center leading-relaxed opacity-70">
                Review your streaks, completed tasks, and focus time.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card bg-[#0B0C10] rounded-2xl p-8 md:p-10 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#3C4F65] sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none">
              <div className="feature-icon w-24 h-24 mx-auto mb-8 bg-[#3C4F65] rounded-full flex items-center justify-center text-4xl relative">
                <span>💙</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-1 bg-[#FF5E1A] rotate-[-45deg]"></div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4 text-center">
                Recover with Compassion
              </h3>
              <p className="font-semibold text-[#FFFFFF] mb-3 text-center opacity-90">
                Reset without guilt.
              </p>
              <p className="text-[#FFFFFF] text-center leading-relaxed opacity-70">
                Break free from perfectionism and maintain momentum guilt-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 xl:px-16 bg-[#0B0C10] text-center border-y border-[#1F2025]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-[#FFFFFF]">
            Ready to elevate your productivity?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-[#FFFFFF] mb-10 md:mb-12 opacity-80 leading-relaxed">
            Join thousands who are transforming their days, one hour at a time.
          </p>
          <a href="#contact" className="bg-[#FF5E1A] text-[#FFFFFF] px-10 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-[#FF5E1A]/50 hover:bg-[#E55517] transition-all transform hover:scale-105 active:scale-95 inline-block">
            Join The Movement
          </a>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="about" className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-[#3C4F65] via-[#1F2025] to-[#0B0C10]">
        <div className="w-full max-w-[1600px] mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 sm:p-10 md:p-12 lg:p-14 border border-[#3C4F65]">
            <div className="text-6xl lg:text-7xl text-[#FF5E1A] mb-6 leading-none">"</div>
            <p className="text-lg lg:text-xl leading-relaxed mb-8 text-[#FFFFFF]">
              Either get this app or be a loser! I used to wonder what I did with my days, or, even worse, on productive days still feel I wasn't doing enough! Now, my stats don't lie! I love the feeling of success and satisfaction this app brings.
            </p>
            <p className="text-xl lg:text-2xl font-bold text-[#FFFFFF]">Adam S.</p>
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

      {/* Final CTA Section */}
      <section className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 xl:px-16 bg-[#0B0C10] text-center border-t border-[#1F2025]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-[#FFFFFF]">
            Ready to elevate your productivity?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-[#FFFFFF] mb-10 md:mb-12 opacity-80 leading-relaxed">
            Join thousands who are transforming their days,
            <br className="hidden sm:block" />
            one hour at a time.
          </p>
          <a href="#contact" className="bg-[#FF5E1A] text-[#FFFFFF] px-10 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-[#FF5E1A]/50 hover:bg-[#E55517] transition-all transform hover:scale-105 active:scale-95 inline-block">
            Join The Movement
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 md:py-16 px-6 sm:px-8 lg:px-12 xl:px-16 bg-[#0B0C10] border-t border-[#1F2025]">
        <div className="w-full max-w-[1600px] mx-auto text-center text-[#FFFFFF] opacity-70">
          <p className="text-sm sm:text-base">&copy; 2026 Win The Hour!™ All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

import { Link } from "react-router-dom";

const TESTIMONIAL_IMAGE = "/wth-hero-male.png";

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[100vh] flex items-center px-6 sm:px-10 lg:px-20 xl:px-32 bg-[#0B0C10]">
        <div className="w-full max-w-[1600px] mx-auto text-center py-40">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight">
            One Hour.{" "}
            <span className="text-[#FF5E1A]">Fully Lived.</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl opacity-80 leading-relaxed max-w-3xl mx-auto">
            Win The Hour!™ was born from a simple belief: you don't need to
            overhaul your entire life to change it. You just need to win the
            next hour.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-40 md:py-52 lg:py-64 px-6 sm:px-10 lg:px-20 xl:px-32 bg-[#1F2025]">
        <div className="w-full max-w-[1400px] mx-auto space-y-20 md:space-y-28">
          <div className="bg-[#0B0C10] rounded-3xl p-12 md:p-16 lg:p-20 border-2 border-[#3C4F65]">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#FF5E1A] mb-8">
              Our Mission
            </h3>
            <p className="text-lg lg:text-xl leading-relaxed opacity-90">
              Most productivity systems fail because they ask you to change
              everything at once. Plan your whole day. Rethink your whole week.
              Redesign your whole life. We believe that's backwards. Real
              transformation happens in the smallest unit of time that still
              matters:{" "}
              <strong className="text-[#FFFFFF] opacity-100">one hour</strong>.
            </p>
          </div>

          <div className="bg-[#0B0C10] rounded-3xl p-12 md:p-16 lg:p-20 border-2 border-[#3C4F65]">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#FF5E1A] mb-8">
              The Philosophy
            </h3>
            <p className="text-lg lg:text-xl leading-relaxed opacity-90 mb-8">
              Traditional productivity systems often create stress and guilt
              when we fall short of unrealistic daily goals. Win The Hour takes a
              different approach:
            </p>
            <div className="space-y-5 ml-2">
              <div className="flex items-start gap-4">
                <span className="text-[#FF5E1A] text-xl font-bold mt-0.5">
                  ✓
                </span>
                <span className="text-lg opacity-90">
                  <strong>Micro-commitments:</strong> Focus on the next hour,
                  not the whole day
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#FF5E1A] text-xl font-bold mt-0.5">
                  ✓
                </span>
                <span className="text-lg opacity-90">
                  <strong>Compassionate accountability:</strong> Track progress
                  without judgment
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#FF5E1A] text-xl font-bold mt-0.5">
                  ✓
                </span>
                <span className="text-lg opacity-90">
                  <strong>Sustainable momentum:</strong> Build habits that last
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-40 md:py-52 lg:py-64 px-6 sm:px-10 lg:px-20 xl:px-32 bg-[#0B0C10]">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
            <div className="bg-[#1F2025] rounded-3xl p-12 lg:p-14 border-2 border-[#3C4F65] text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FF5E1A] mb-4">
                24
              </div>
              <p className="text-sm opacity-70">Opportunities every day</p>
            </div>
            <div className="bg-[#1F2025] rounded-3xl p-12 lg:p-14 border-2 border-[#3C4F65] text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FF5E1A] mb-4">
                60
              </div>
              <p className="text-sm opacity-70">Minutes to make count</p>
            </div>
            <div className="bg-[#1F2025] rounded-3xl p-12 lg:p-14 border-2 border-[#3C4F65] text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FF5E1A] mb-4">
                1
              </div>
              <p className="text-sm opacity-70">Hour at a time</p>
            </div>
            <div className="bg-[#1F2025] rounded-3xl p-12 lg:p-14 border-2 border-[#3C4F65] text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FF5E1A] mb-4">
                ∞
              </div>
              <p className="text-sm opacity-70">Potential unlocked</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-40 md:py-52 lg:py-64 px-6 sm:px-10 lg:px-20 xl:px-32 bg-[#1F2025]">
        <div className="w-full max-w-[1600px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-28 md:mb-36 text-center">
            What We <span className="text-[#FF5E1A]">Stand For</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
            <div className="bg-[#0B0C10] rounded-2xl p-12 lg:p-16 border-2 border-[#3C4F65]">
              <div className="text-4xl mb-10">🎯</div>
              <h3 className="text-xl font-bold mb-6">
                Progress Over Perfection
              </h3>
              <p className="opacity-70 leading-relaxed">
                A won hour doesn't need to be perfect. It just needs to be
                intentional. Done beats flawless every time.
              </p>
            </div>
            <div className="bg-[#0B0C10] rounded-2xl p-12 lg:p-16 border-2 border-[#3C4F65]">
              <div className="text-4xl mb-10">🔄</div>
              <h3 className="text-xl font-bold mb-6">Guilt-Free Resets</h3>
              <p className="opacity-70 leading-relaxed">
                Lost an hour? The next one starts fresh. No shame spirals. No
                "I'll start Monday." Start now.
              </p>
            </div>
            <div className="bg-[#0B0C10] rounded-2xl p-12 lg:p-16 border-2 border-[#3C4F65] sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none">
              <div className="text-4xl mb-10">💪</div>
              <h3 className="text-xl font-bold mb-6">
                Radical Accountability
              </h3>
              <p className="opacity-70 leading-relaxed">
                Not from a boss. Not from an app. From yourself. We just give
                you the tool to keep score.
              </p>
            </div>
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
            Ready to join the movement?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-14 md:mb-20 opacity-80 leading-relaxed">
            Your next winning hour starts now.
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

import { Link } from "react-router-dom";

const TESTIMONIAL_IMAGE = "/wth-hero-male-web.jpg";

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center px-6 sm:px-10 lg:px-20 xl:px-32 bg-charcoal">
        <div className="w-full max-w-[1600px] mx-auto text-center py-28">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            One Hour.{" "}
            <span className="text-orange">Fully Lived.</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl opacity-80 leading-relaxed max-w-3xl mx-auto">
            Win The Hour!™ was born from a simple belief: you don't need to
            overhaul your entire life to change it. You just need to win the
            next hour.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-20 xl:px-32 bg-slate">
        <div className="w-full max-w-[1400px] mx-auto space-y-12 md:space-y-16">
          <div className="bg-charcoal rounded-3xl p-10 md:p-14 lg:p-16 border-2 border-steel">
            <h3 className="text-3xl sm:text-4xl font-bold text-orange mb-6">
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

          <div className="bg-charcoal rounded-3xl p-10 md:p-14 lg:p-16 border-2 border-steel">
            <h3 className="text-3xl sm:text-4xl font-bold text-orange mb-6">
              The Philosophy
            </h3>
            <p className="text-lg lg:text-xl leading-relaxed opacity-90 mb-6">
              Traditional productivity systems often create stress and guilt
              when we fall short of unrealistic daily goals. Win The Hour takes a
              different approach:
            </p>
            <div className="space-y-4 ml-2">
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
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-20 xl:px-32 bg-charcoal">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-slate rounded-3xl p-8 lg:p-10 border-2 border-steel text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange mb-3">
                24
              </div>
              <p className="text-sm opacity-70">Opportunities every day</p>
            </div>
            <div className="bg-slate rounded-3xl p-8 lg:p-10 border-2 border-steel text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange mb-3">
                60
              </div>
              <p className="text-sm opacity-70">Minutes to make count</p>
            </div>
            <div className="bg-slate rounded-3xl p-8 lg:p-10 border-2 border-steel text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange mb-3">
                1
              </div>
              <p className="text-sm opacity-70">Hour at a time</p>
            </div>
            <div className="bg-slate rounded-3xl p-8 lg:p-10 border-2 border-steel text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange mb-3">
                ∞
              </div>
              <p className="text-sm opacity-70">Potential unlocked</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-20 xl:px-32 bg-slate">
        <div className="w-full max-w-[1600px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 md:mb-20 text-center">
            What We <span className="text-orange">Stand For</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <div className="bg-charcoal rounded-2xl p-10 lg:p-12 border-2 border-steel">
              <div className="w-12 h-12 border-2 border-orange rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#FF5E1A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">
                Progress Over Perfection
              </h3>
              <p className="opacity-70 leading-relaxed">
                A won hour doesn't need to be perfect. It just needs to be
                intentional. Done beats flawless every time.
              </p>
            </div>
            <div className="bg-charcoal rounded-2xl p-10 lg:p-12 border-2 border-steel">
              <div className="w-12 h-12 border-2 border-orange rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#FF5E1A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Guilt-Free Resets</h3>
              <p className="opacity-70 leading-relaxed">
                Lost an hour? The next one starts fresh. No shame spirals. No
                "I'll start Monday." Start now.
              </p>
            </div>
            <div className="bg-charcoal rounded-2xl p-10 lg:p-12 border-2 border-steel sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none">
              <div className="w-12 h-12 border-2 border-orange rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#FF5E1A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">
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
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-20 xl:px-32 bg-charcoal text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-10">
            Ready to join the movement?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-10 md:mb-14 opacity-80 leading-relaxed">
            Your next winning hour starts now.
          </p>
          <Link
            to="/contact"
            className="bg-orange text-[#FFFFFF] px-8 py-4 rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-[#FF5E1A]/50 hover:bg-[#E55517] transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap overflow-hidden"
          >
            Join The Movement
          </Link>
        </div>
      </section>
    </>
  );
}

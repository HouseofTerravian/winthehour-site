import { Link } from "react-router-dom";

const TESTIMONIAL_IMAGE = "/wth-hero-male.png";

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-[#0B0C10]">
        <div className="w-full max-w-[1600px] mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            One Hour.{" "}
            <span className="text-[#FF5E1A]">Fully Lived.</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl opacity-80 leading-relaxed max-w-3xl mx-auto">
            Win The Hour!™ was born from a simple belief: you don't need to overhaul your entire life to change it. You just need to win the next hour.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 xl:px-16 bg-[#1F2025]">
        <div className="w-full max-w-[1600px] mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
              The Philosophy Behind{" "}
              <span className="text-[#FF5E1A]">The Movement</span>
            </h2>
            <div className="space-y-6 text-lg opacity-80 leading-relaxed">
              <p>
                Most productivity systems fail because they ask you to change everything at once. Plan your whole day. Rethink your whole week. Redesign your whole life.
              </p>
              <p>
                We believe that's backwards. Real transformation happens in the smallest unit of time that still matters: <strong className="text-[#FFFFFF] opacity-100">one hour</strong>.
              </p>
              <p>
                Win this hour, and the next one gets easier. Stack enough winning hours, and you've built a winning day. Stack enough winning days, and you've built a life you're proud of.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#0B0C10] rounded-2xl p-8 border border-[#3C4F65] text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FF5E1A] mb-2">24</div>
              <p className="text-sm opacity-70">Opportunities every day</p>
            </div>
            <div className="bg-[#0B0C10] rounded-2xl p-8 border border-[#3C4F65] text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FF5E1A] mb-2">60</div>
              <p className="text-sm opacity-70">Minutes to make count</p>
            </div>
            <div className="bg-[#0B0C10] rounded-2xl p-8 border border-[#3C4F65] text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FF5E1A] mb-2">1</div>
              <p className="text-sm opacity-70">Hour at a time</p>
            </div>
            <div className="bg-[#0B0C10] rounded-2xl p-8 border border-[#3C4F65] text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FF5E1A] mb-2">∞</div>
              <p className="text-sm opacity-70">Potential unlocked</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 xl:px-16 bg-[#0B0C10] border-y border-[#1F2025]">
        <div className="w-full max-w-[1600px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-14 md:mb-20 text-center">
            What We <span className="text-[#FF5E1A]">Stand For</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
            <div className="bg-[#1F2025] rounded-2xl p-8 md:p-10 border border-[#3C4F65]">
              <div className="text-3xl mb-6">🎯</div>
              <h3 className="text-xl font-bold mb-3">Progress Over Perfection</h3>
              <p className="opacity-70 leading-relaxed">A won hour doesn't need to be perfect. It just needs to be intentional. Done beats flawless every time.</p>
            </div>
            <div className="bg-[#1F2025] rounded-2xl p-8 md:p-10 border border-[#3C4F65]">
              <div className="text-3xl mb-6">🔄</div>
              <h3 className="text-xl font-bold mb-3">Guilt-Free Resets</h3>
              <p className="opacity-70 leading-relaxed">Lost an hour? The next one starts fresh. No shame spirals. No "I'll start Monday." Start now.</p>
            </div>
            <div className="bg-[#1F2025] rounded-2xl p-8 md:p-10 border border-[#3C4F65] sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none">
              <div className="text-3xl mb-6">💪</div>
              <h3 className="text-xl font-bold mb-3">Radical Accountability</h3>
              <p className="opacity-70 leading-relaxed">Not from a boss. Not from an app. From yourself. We just give you the tool to keep score.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-[#3C4F65] via-[#1F2025] to-[#0B0C10]">
        <div className="w-full max-w-[1600px] mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 sm:p-10 md:p-12 lg:p-14 border border-[#3C4F65]">
            <div className="text-6xl lg:text-7xl text-[#FF5E1A] mb-6 leading-none">"</div>
            <p className="text-lg lg:text-xl leading-relaxed mb-8">
              Either get this app or be a loser! I used to wonder what I did with my days, or, even worse, on productive days still feel I wasn't doing enough! Now, my stats don't lie! I love the feeling of success and satisfaction this app brings.
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
      <section className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 xl:px-16 bg-[#0B0C10] text-center border-t border-[#1F2025]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
            Ready to join the movement?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-10 md:mb-12 opacity-80 leading-relaxed">
            Your next winning hour starts now.
          </p>
          <Link to="/contact" className="bg-[#FF5E1A] text-[#FFFFFF] px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-[#FF5E1A]/50 hover:bg-[#E55517] transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap">
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";

const sections = [
  {
    number: "I",
    title: "Time Is Sovereignty",
    body: "You do not \"manage\" time. You reclaim it. Every hour is a territory — either conquered or surrendered. Most productivity systems teach compliance. We teach dominion. Win The Hour is not a to-do list. It is a declaration of independence from distraction, drift, and digital chaos.",
    highlight: true,
  },
  {
    number: "II",
    title: "Discipline Over Motivation",
    body: "Motivation is a visitor. Discipline is a resident. We do not chase emotional highs. We build systems that function in fog, fatigue, and friction. The Morning Flow and Evening Flow are rituals, not suggestions. Rituals create identity. Identity creates inevitability.",
    highlight: false,
  },
  {
    number: "III",
    title: "Compassion Without Compromise",
    body: "Perfectionism is a prison. We offer one streak recovery per month — not because failure is acceptable, but because resilience is mandatory. You will miss hours. You will miss days. The question is not whether you fall. It is whether you return. Compassionate Reset exists to eliminate shame and restore momentum without permission.",
    highlight: false,
  },
  {
    number: "IV",
    title: "Data As Truth",
    body: "Your stats do not lie. Your intentions do. Win The Hour!™ shows you the gap between who you think you are and who your calendar proves you to be. We do not celebrate potential. We celebrate execution. Streaks, XP, mission logs — these are not vanity metrics. They are evidence of transformation.",
    highlight: false,
  },
  {
    number: "V",
    title: "Community As Crucible",
    body: "You are the average of the 5 people you spend time with. Win The Hour!™ is a sanctuary for the serious. We do not tolerate mediocrity disguised as self-care. We celebrate wins, dissect losses, and hold each other accountable without apology. If you want comfort, go elsewhere. If you want elevation, stay here.",
    highlight: true,
  },
];

export default function Manifesto() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-28 px-6 bg-charcoal">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              The Win The Hour!™ <span className="text-molten">Manifesto</span>
            </h1>
            <p className="text-xl text-white/70">
              Our philosophy on time, discipline, and sovereignty
            </p>
          </div>

          <div className="space-y-14">
            {sections.map((section) => (
              <div
                key={section.number}
                className={`bg-slate rounded-3xl p-10 border-2 ${
                  section.highlight ? "border-molten" : "border-steel"
                }`}
              >
                <h2
                  className={`text-3xl font-bold mb-4 ${
                    section.highlight ? "text-molten" : "text-white"
                  }`}
                >
                  {section.number}. {section.title}
                </h2>
                <p className="text-lg leading-relaxed opacity-90">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link
              to="/membership"
              className="bg-molten text-white px-12 py-5 rounded-full font-bold text-xl hover:opacity-90 transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap overflow-hidden"
            >
              Join The Movement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

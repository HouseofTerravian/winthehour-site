import { Link } from "react-router-dom";

const posts = [
  {
    title: "Why Hourly Check-Ins Beat To-Do Lists",
    excerpt:
      "Most productivity systems fail because they focus on tasks, not time. Hourly check-ins flip the model — forcing you to confront how each hour was actually spent, not just what you planned to do.",
    date: "Coming Soon",
    tag: "Productivity",
  },
  {
    title: "The Science Behind Streak Psychology",
    excerpt:
      "Streaks tap into loss aversion, one of the most powerful cognitive biases. Learn why maintaining a streak creates more motivation than any reward system — and how Win The Hour!™ uses this to drive real change.",
    date: "Coming Soon",
    tag: "Psychology",
  },
  {
    title: "Morning Flow vs. Evening Flow: A Complete Guide",
    excerpt:
      "Your morning sets the tone. Your evening seals the lesson. Discover how the Morning Flow and Evening Flow rituals work together to bookend every productive day.",
    date: "Coming Soon",
    tag: "Rituals",
  },
  {
    title: "From Starter to Sovereign: When to Upgrade",
    excerpt:
      "The Starter tier gives you everything you need to begin. But when your streak hits 30 days and you're craving deeper analytics, it might be time to go Sovereign.",
    date: "Coming Soon",
    tag: "Membership",
  },
  {
    title: "Compassionate Reset: Why We Built Streak Recovery",
    excerpt:
      "Perfectionism kills more goals than laziness ever will. One free streak recovery per month isn't a crutch — it's a design decision rooted in resilience science.",
    date: "Coming Soon",
    tag: "Philosophy",
  },
  {
    title: "Building Your M.Y.B.E.D.™ Framework",
    excerpt:
      "Make Yourself Better Every Day isn't just a tagline. It's a framework for stacking micro-improvements into compound transformation. Here's how to apply it hour by hour.",
    date: "Coming Soon",
    tag: "Framework",
  },
];

const tagColors: Record<string, string> = {
  Productivity: "bg-molten/20 text-molten border-molten",
  Psychology: "bg-gold/20 text-gold border-gold",
  Rituals: "bg-molten/20 text-molten border-molten",
  Membership: "bg-steel/40 text-white border-steel",
  Philosophy: "bg-gold/20 text-gold border-gold",
  Framework: "bg-molten/20 text-molten border-molten",
};

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-28 px-6 bg-charcoal">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              The <span className="text-molten">Blog</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Insights on productivity, discipline, and winning your hours
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {posts.map((post) => (
              <article
                key={post.title}
                className="bg-slate rounded-3xl p-8 border-2 border-steel hover:border-molten transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full border ${
                      tagColors[post.tag] || "bg-steel/40 text-white border-steel"
                    }`}
                  >
                    {post.tag}
                  </span>
                  <span className="text-white/50 text-sm">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 leading-tight">
                  {post.title}
                </h2>
                <p className="text-white/70 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>

          <div className="text-center mt-20">
            <div className="bg-slate rounded-3xl p-12 border-2 border-molten">
              <h2 className="text-3xl font-bold mb-4">
                Blog launching soon
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                We're preparing deep dives on productivity science, streak psychology, and the Win The Hour!™ methodology. Stay tuned.
              </p>
              <Link
                to="/contact"
                className="bg-molten text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-molten/50 hover:bg-molten-dark transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap overflow-hidden"
              >
                Get Notified
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

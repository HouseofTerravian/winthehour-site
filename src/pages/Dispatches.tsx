import { Link } from "react-router-dom";

const dispatches = [
  {
    id: "001",
    title: "The Hour Does Not Wait for Your List",
  },
  {
    id: "002",
    title: "The Streak Is Older Than You",
  },
  {
    id: "003",
    title: "Two Gates. One Throne.",
  },
  {
    id: "004",
    title: "The Crossing",
  },
  {
    id: "005",
    title: "The Fracture Is Not the End",
  },
  {
    id: "006",
    title: "The Framework That Does Not Expire",
  },
];

export default function Dispatches() {
  return (
    <>
      <section className="pt-32 pb-28 px-6 bg-charcoal min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              The <span className="text-molten">Dispatches</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Crownstrike Communications from the sovereign brand
            </p>
          </div>

          <div className="space-y-0 border-t border-steel">
            {dispatches.map((d) => (
              <Link
                key={d.id}
                to={`/dispatches/${d.id}`}
                className="block border-b border-steel py-8 group hover:bg-slate/30 transition-all px-4 -mx-4"
              >
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <span className="text-molten font-bold text-sm tracking-widest uppercase">
                      Dispatch {d.id}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold mt-2 group-hover:text-molten transition-colors">
                      {d.title}
                    </h2>
                    <p className="text-white/40 text-sm mt-2">Published 2.10.26</p>
                  </div>
                  <svg
                    className="w-6 h-6 text-white/30 group-hover:text-molten shrink-0 transition-colors"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

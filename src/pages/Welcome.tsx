import { Link } from 'react-router-dom';
import { APP_URL } from '../config';

export default function Welcome() {
  return (
    <div className="min-h-screen bg-charcoal flex flex-col items-center justify-center px-6 py-24 text-center">
      <div className="max-w-2xl mx-auto w-full">

        {/* Logo mark */}
        <div className="text-6xl mb-8">⏱</div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
          You're In.<br />
          <span className="text-molten">Now Go Win.</span>
        </h1>

        <p className="text-xl text-white/70 mb-4 leading-relaxed">
          Your $1 just bought you something most people never have — a real commitment to their own time.
        </p>
        <p className="text-white/40 mb-14 text-sm">
          The app opens instantly in your browser. No download required.
        </p>

        {/* Primary CTA */}
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-molten text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-molten/50 hover:bg-molten-dark transition-all transform hover:scale-105 active:scale-95 glow-pulse mb-14"
        >
          Launch Win The Hour!™ →
        </a>

        {/* Feature list */}
        <div className="bg-slate rounded-3xl p-8 border border-steel text-left max-w-md mx-auto mb-12">
          <h3 className="font-bold text-lg mb-5 text-molten tracking-wide">WHAT YOU UNLOCKED</h3>
          <ul className="space-y-3">
            {[
              'Full WTH! hourly check-in flow',
              'M.Y.B.E.D. daily priority system',
              'BeastMode 15-minute intervals',
              'TODAY! full waking hours overview',
              'Streak tracking & XP progression',
              'Morning & Evening Flows',
              'Missions, Stats, Store & more',
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-white/75">
                <span className="text-molten font-bold mt-0.5 flex-shrink-0">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bookmark reminder */}
        <p className="text-white/30 text-xs mb-8">
          Bookmark <span className="text-white/50">{APP_URL}</span> for quick access.
        </p>

        <Link
          to="/"
          className="text-white/25 text-sm hover:text-white/55 transition-colors"
        >
          ← Back to winthehour.app
        </Link>
      </div>
    </div>
  );
}

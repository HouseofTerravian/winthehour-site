import { memo } from 'react';

interface ClockCheckIconProps {
  className?: string;
}

export const ClockCheckIcon = memo(({ className = "w-16 h-16" }: ClockCheckIconProps) => (
  <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="clockBgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1a1a2e" />
        <stop offset="100%" stopColor="#16213e" />
      </linearGradient>
      <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.3" />
      </filter>
    </defs>

    {/* Outer ring - white/light border */}
    <circle
      cx="40"
      cy="40"
      r="36"
      fill="none"
      stroke="#e0e0e0"
      strokeWidth="3"
    />

    {/* Inner dark circle */}
    <circle
      cx="40"
      cy="40"
      r="32"
      fill="url(#clockBgGradient)"
    />

    {/* Clock ticks - at 12, 3, 6, 9 positions */}
    <line x1="40" y1="12" x2="40" y2="18" stroke="#a0a0a0" strokeWidth="2" strokeLinecap="round" />
    <line x1="40" y1="62" x2="40" y2="68" stroke="#a0a0a0" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="40" x2="18" y2="40" stroke="#a0a0a0" strokeWidth="2" strokeLinecap="round" />
    <line x1="62" y1="40" x2="68" y2="40" stroke="#a0a0a0" strokeWidth="2" strokeLinecap="round" />

    {/* Checkmark - teal/cyan color */}
    <path
      d="M24 40 L34 50 L56 28"
      fill="none"
      stroke="#2dd4bf"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

ClockCheckIcon.displayName = 'ClockCheckIcon';

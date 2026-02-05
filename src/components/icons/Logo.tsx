import { memo } from 'react';

interface LogoProps {
  className?: string;
}

export const Logo = memo(({ className = "w-10 h-10" }: LogoProps) => (
  <svg viewBox="0 0 48 48" className={className} aria-label="Win The Hour logo">
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4F46E5" />
        <stop offset="100%" stopColor="#7C3AED" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="22" fill="none" stroke="url(#logoGradient)" strokeWidth="2" />
    <path
      d="M14 24 L21 31 L34 17"
      fill="none"
      stroke="white"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

Logo.displayName = 'Logo';

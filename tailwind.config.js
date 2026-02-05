/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wth': {
          'dark': '#0F0518',
          'purple': '#1A0A2E',
          'orange': {
            300: '#FFB347',
            400: '#FFA033',
            500: '#FF8C00',
            600: '#FF6B35',
          },
        },
      },
      fontFamily: {
        'display': ['Montserrat', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glossy': 'inset 0 1px 1px rgba(255,255,255,0.4), 0 4px 15px rgba(255,140,0,0.4)',
        'glossy-hover': 'inset 0 1px 1px rgba(255,255,255,0.5), 0 6px 25px rgba(255,140,0,0.5)',
        'glass': '0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #2D1B4E 0%, #1A0A2E 50%, #0F0518 100%)',
        'cta-gradient': 'linear-gradient(180deg, #1A1A2E 0%, #0F0518 100%)',
      },
    },
  },
  plugins: [],
}

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
          'dark': '#0B0C10',        // Charcoal Black - background, navbar
          'slate': '#1F2025',       // Slate Gray - card shadows/depth
          'blue': '#3C4F65',        // Steel Blue Tint - blue undertone, dividers
          'orange': {
            400: '#FF7A3D',         // Lighter orange for hover
            500: '#FF5E1A',         // Molten Orange - primary CTA
            600: '#E54D0F',         // Darker orange for active
          },
        },
      },
      fontFamily: {
        'display': ['Montserrat', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glossy': 'inset 0 1px 1px rgba(255,255,255,0.4), 0 4px 15px rgba(255,94,26,0.4)',
        'glossy-hover': 'inset 0 1px 1px rgba(255,255,255,0.5), 0 6px 25px rgba(255,94,26,0.5)',
        'glass': '0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #3C4F65 0%, #1F2025 50%, #0B0C10 100%)',
        'cta-gradient': 'linear-gradient(180deg, #1F2025 0%, #0B0C10 100%)',
      },
    },
  },
  plugins: [],
}

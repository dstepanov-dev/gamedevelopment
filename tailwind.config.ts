import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Mid-tone slate-navy base — never pitch black, never pure white.
        base: {
          900: '#10151d', // deepest ambient
          800: '#161d28', // page background (mid-tone)
          700: '#1c2533', // raised background
          600: '#232e3f', // surface
          500: '#2c3850', // elevated surface / borders
        },
        // Brand accents extracted from gamedevelopment.company
        brand: {
          DEFAULT: '#2487ce', // corporate blue
          light: '#469fdf',
          dark: '#124265', // deep navy heading
        },
        cyan: { glow: '#0dcaf0' },
        violet: { glow: '#7c5cff' },
        magenta: { glow: '#f3268c' },
        teal: { glow: '#20c997' },
      },
      fontFamily: {
        display: ['var(--font-orbitron)', 'sans-serif'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(6, 12, 22, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
        'glow-brand': '0 0 40px -8px rgba(36, 135, 206, 0.55)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-22px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        float: 'float 9s ease-in-out infinite',
        'float-slow': 'float 14s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;

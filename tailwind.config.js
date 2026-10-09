/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        noir: '#1a0505',
        accent: {
          DEFAULT: '#ef233c',
          glow: 'rgba(239, 35, 60, 0.5)',
        },
        terminal: {
          bg: '#0a0a0a',
          green: '#33ff00',
          amber: '#ffb000',
          muted: '#1f521f',
          error: '#ff3333',
        },
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        animStar: {
          from: { transform: 'translateY(0px)' },
          to: { transform: 'translateY(-2000px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        borderSpin: {
          to: { '--gradient-angle': '360deg' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'star-slow': 'animStar 50s linear infinite',
        'star-fast': 'animStar 80s linear infinite',
        blink: 'blink 1s step-end infinite',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep green — primary
        forest: {
          50: '#f2f7f4',
          100: '#e0ece5',
          200: '#c2d9cc',
          300: '#98bfaa',
          400: '#6b9f84',
          500: '#4a8365',
          600: '#376a50',
          700: '#2d5542',
          800: '#254437',
          900: '#1e392f',
          950: '#0f1f1a',
        },
        // Soft gold — accent
        gold: {
          50: '#fbf8ef',
          100: '#f6efd8',
          200: '#ecdda9',
          300: '#e3c87a',
          400: '#d9b253',
          500: '#cfa041',
          600: '#b78534',
          700: '#95662d',
          800: '#7a522b',
          900: '#654427',
        },
        // Dark charcoal text
        charcoal: {
          DEFAULT: '#26282a',
          light: '#3d4043',
          muted: '#6b7075',
        },
        mist: '#f6f7f6',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(30, 57, 47, 0.15)',
        card: '0 4px 24px -6px rgba(30, 57, 47, 0.10)',
        lift: '0 18px 50px -18px rgba(30, 57, 47, 0.28)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollDot: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(10px)', opacity: '0.4' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out both',
        scrollDot: 'scrollDot 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
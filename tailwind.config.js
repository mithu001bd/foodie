/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#fdf9ef',
          100: '#faf0d7',
          200: '#f4dfa8',
          300: '#edc97a',
          400: '#e6b24c',
          500: '#d99a2b',
          600: '#c47d20',
          700: '#a3611d',
          800: '#844e1e',
          900: '#6d411d',
        },
        charcoal: {
          50: '#f6f6f7',
          100: '#e2e2e4',
          200: '#c4c5c9',
          300: '#9d9fa6',
          400: '#767880',
          500: '#5b5d65',
          600: '#46484f',
          700: '#373941',
          800: '#2a2c33',
          900: '#1a1c22',
          950: '#0f1014',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-up': 'fadeUp 0.7s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};

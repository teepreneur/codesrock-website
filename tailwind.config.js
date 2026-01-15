/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#46C5D5',
        'brand-orange': '#FF7340',
        'brand-pink': '#EC4899',
        'brand-yellow': '#FDC82F',
        'brand-purple': '#5D3B98',
        'brand-red': '#CE3845',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'heading': ['Nunito', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out infinite 2s',
        'wub': 'wub 2s ease-in-out infinite',
        'wiggle': 'wiggle 3s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'sway': 'sway 4s ease-in-out infinite',
        'pop': 'pop 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'float-icon': 'float-icon 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
          '100%': { transform: 'translateY(0px) rotate(0deg)' },
        },
        wub: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'sway': {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '25%': { transform: 'translateX(5px) rotate(2deg)' },
          '75%': { transform: 'translateX(-5px) rotate(-2deg)' },
        },
        'pop': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'float-icon': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.8' },
          '50%': { transform: 'translateY(-8px) rotate(10deg)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

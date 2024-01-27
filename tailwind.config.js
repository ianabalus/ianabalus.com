/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx,svg}',
    './index.html'
  ],
  theme: {
    screens: {
      'md': '768px',
      'lg': '1280px'
    },
    fontFamily: {
      serif: ['PT Serif', 'serif'],
    },
    colors: {
      trasparent: 'transparent',
      'black': '#101010',
      'white': '#f7f7f7',
      'grey': '#919191',
    },
    transitionTimingFunction: {
      'in-out': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
    },
    extend: {
      keyframes: {
        move: {
          '0%': { transform: 'translateY(-8px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        }
      }
    },
  },
  plugins: [],
}
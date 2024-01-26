/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {},
    screens: {
      'md': '768px',
      'lg': '1280px'
    },
    fontFamily: {
      serif: ['PT Serif', 'serif'],
    },
    colors: {
      'black': '#101010',
      'white': '#f7f7f7',
      'grey': '#919191',
    }
  },
  plugins: [],
}
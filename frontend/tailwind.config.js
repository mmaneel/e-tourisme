/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['"Jost"', "sans-serif"],
      },
      colors: {
        'bgblue': 'rgba(203, 222, 236, 0.79)',
        'bgshadow' : 'rgba(84, 47, 21, 0.21)',
        'gray':'rgba(22, 38, 65, 0.48)',
        'orange':'rgba(248, 182, 84, 1)',
      },
    },
  },
  plugins: [],
}
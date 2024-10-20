/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'petblue': '#7892F1',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
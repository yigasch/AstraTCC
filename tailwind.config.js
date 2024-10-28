/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'petblue': '#7892F1',
        'blue': '#4C5DC2',
        'indigo': '#7F81FF',
        'pink': '#ED747D',
        'lightblue': '#84B2D1',
        'magenta': '#C566F5',
        'lightgray': '#DBDBDB',
        'mediumgray': '#ADADAD'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'customlinear': '0 4px 10px rgba(0, 0, 0, 0.4)',
        'custominput': '0 4px 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.otp-input': {
          backgroundColor: 'rgb(228, 228, 228)',
          width: '2.5em',
          height: '3em',
          textAlign: 'center',
          border: 'none',
          borderRadius: '7px',
          caretColor: 'rgb(127, 129, 255)',
          color: 'rgb(44, 44, 44)',
          outline: 'none',
          fontWeight: '600',
          marginTop: '1em',
          '&:focus': {
            backgroundColor: 'rgba(127, 129, 255, 0.199)',
            transitionDuration: '.3s',
          },
          '&:valid': {
            backgroundColor: 'rgba(127, 129, 255, 0.199)',
            transitionDuration: '.3s',
          },
        }
      })
    }
  ],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js'],
  theme: {
      extend: {
        fontFamily: {
          itim: ["Itim", "cursive"],
          SourceSansPro: ["Source Sans Pro", "cursive"],
        },
      },
      screens : {
          '2xl': {'max': '1535px'},

          'xl': {'max': '1279px'},

          'lg': {'max': '1023px'},

          'md': {'max': '767px'},

          'sm': {'max': '639px'},
      }
  },
  plugins: [],
}
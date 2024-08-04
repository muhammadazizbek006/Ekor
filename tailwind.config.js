/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'head':'#203686 ',
        'gray':'#70798E',
        'sariq':'#FFED32',
        'input':'#DDE1E6',
        'special':'#20368633'
      },

      backgroundImage: {
        'offer': "url('/src/imgs/BusinessOffer/offerbg.png')",

      },
      fontSize:{
        '40':'40px'
      },
      lineHeight:{
        '40':'40px'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
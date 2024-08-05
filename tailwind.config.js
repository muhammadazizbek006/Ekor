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
        'special':'#20368633',
        'yashil':'#4ADD47',
        'kok':'#2AABEE',
        'week':'#1877F2',
      },

      backgroundImage: {
        'offer': "url('/src/imgs/BusinessOffer/offerbg.png')",
        'Subscribe': "url('/src/imgs/Subscribe/bg.png')",


      },
      fontSize:{
        '40':'40px'
      },
      lineHeight:{
        '40':'40px',
        '54':'54px'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
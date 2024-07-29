/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'head':'#203686',
        'gray':'#70798E',
        'sariq':'#FFED32',
      }
    },
  },
  plugins: [],
}
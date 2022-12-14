/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '17':'4.25rem'
      },
      colors:{
        primary:"#98CBFF",
        secondary:"#002D5B"
      },
      fontFamily:{
        'sans':['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
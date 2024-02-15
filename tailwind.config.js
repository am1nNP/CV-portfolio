/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "sm":"360px"
      },
      boxShadow:{
        "moon":['-9px 6px 0px 0px rgba(253,231,103)']
      },
      fontFamily:{
        vazir:['Vazirmatn','sans-serif']
      },
    },
  },
  plugins: [],
}
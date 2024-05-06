/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container:{
      center : true
    },
    fontFamily: {
      nunitoFont: ["Nunito", "sans-serif"],
      interFont: ["Inter", "sans-serif"],
      Popins:["Poppins", "sans-serif"]
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Slab", "serif"],
        dmSans: ["DM Sans","serif"],
        kanit: ["kanit","serif"]
      },
      colors:{
        "neon-green" : "#98c944",
        "gray": "#343a40",
        "gray-100": "#6c757d",
      },
      scrollbar: {
        hide: 'hide'
      }
    },
  },
  plugins: [],
}
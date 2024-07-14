/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        "earth-image" : "url(./images/earth.jpg)"
      }
    },
  },
  plugins: [],
}
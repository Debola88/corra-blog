/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/src/assets/Imge.jpg')",
      },
      fontFamily: {
        'Nav-color' : ['Rubik Lines']
      }
    },
  },
  plugins: [],
}
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
        'Nav-color' : ['Rubik Lines'],
        'body-font' : ['Roboto'],
        'Bodoni' : ['Bodoni'],
        'Satisfy' : ['Satisfy'],
        'Montserrat' : ['Montserrat']
      },
      listStyleImage: {
        'icon': 'url("/src/assets/Icon.png")',
        'icons': 'url("/src/assets/Icon (1).png")',
      },
    },
  },
  plugins: [],
}
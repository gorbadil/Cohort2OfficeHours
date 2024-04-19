/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainRed: "tomato",
        mainRedLigth: "#f6866a",
        darkGrey: "#9095a7",
        darkBlue: "#1d1e25",
        ligthGrey: "#fafafa",
      },
    },
  },
  plugins: [],
};

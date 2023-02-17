/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        main_color_1: "#2c3e50",
        main_color_2: "#34495e",
      },
      screens: {
        sm: {max: "767px"},
      },
    },
  },
  plugins: [],
};

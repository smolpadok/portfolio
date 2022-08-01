/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "325px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Karla", "sans-serif"],
        serif: ["Bluu Next", "DM Serif Display", "serif"],
      },
    },
  },
  plugins: [],
};

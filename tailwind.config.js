/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A6DFF",
        secondary: {
          700: "#555775",
          800: "#3F4264",
        },
      },
    },
  },
  plugins: [],
};

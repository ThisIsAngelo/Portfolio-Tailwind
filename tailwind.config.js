/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#c026d3",
        secondary: "#64748b",
        dark: "#701a75",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

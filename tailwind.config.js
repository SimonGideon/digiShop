/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FF6363",
        navbg: "#ed1f24",
        navshade: {
          100: "#ffe5e6",
          200: "#fcb8ba",
          300: "#f28a8d",
          400: "#e85b61",
          500: "#ed1f24",
          600: "#c81b1f",
          700: "#a31719",
        },
        displaybg: "#231f20",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
    },
  },
  plugins: [],
};

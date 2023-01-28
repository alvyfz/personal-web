/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "Raleway", "Arial", "Helvetica", "sans-serif"],
        sencondary: [
          "Raleway",
          "Montserrat",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
        ternary: [
          "Merriweather",
          "Montserrat",
          "Raleway",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
      },
      colors: {
        primary: "#016DB2",
        primary2: "#005499",
        primary3: "#003F80",
        blur: "rgba(255,255,255,0.3)",
      },
    },
  },
  plugins: [],
};

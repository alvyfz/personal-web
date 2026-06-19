/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "system-ui", "Segoe UI", "sans-serif"],
        secondary: ["Inter", "system-ui", "Segoe UI", "sans-serif"],
        sencondary: ["Inter", "system-ui", "Segoe UI", "sans-serif"],
        display: ["Inter", "system-ui", "Segoe UI", "sans-serif"],
        ternary: ["Inter", "system-ui", "Segoe UI", "sans-serif"],
      },
      colors: {
        primary: "#181d26",
        primary2: "#0d1218",
        primary3: "#1a3866",
        blur: "rgba(255,255,255,0.92)",
        brand: {
          ink: "#181d26",
          body: "#333840",
          muted: "#41454d",
          hairline: "#dddddd",
          canvas: "#ffffff",
          surfaceSoft: "#f8fafc",
          surfaceStrong: "#e0e2e6",
          surfaceDark: "#181d26",
          coral: "#aa2d00",
          forest: "#0a2e0e",
          cream: "#f5e9d4",
          peach: "#fcab79",
          mint: "#a8d8c4",
          yellow: "#f4d35e",
          mustard: "#d9a441",
          link: "#1b61c9",
        },
      },
      boxShadow: {
        soft: "0 12px 40px rgba(24, 29, 38, 0.08)",
      },
    },
  },
  plugins: [],
};

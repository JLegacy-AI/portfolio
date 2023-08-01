/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        turquoise: "#19566B",
        gold: "#FFD700",
        linkedin: "#0077b5",
        twitter: "#00acee",
      },
      fontFamily: {
        ailerons: "Ailerons",
        kusanagi: "Kusanagi",
        poppins: ["'Poppins'", "sans-serif"],
        formula: "Formula",
      },
    },
  },
  plugins: [],
};

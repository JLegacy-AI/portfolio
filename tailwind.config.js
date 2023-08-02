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
        html5: "#f06529",
        css3: "#2965f1",
        reactjs: " #61dbfb",
        nodejs: "#303030",
        mongodb: "#589636",
        php: "#8993be",
        jquery: "#0769AD",
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

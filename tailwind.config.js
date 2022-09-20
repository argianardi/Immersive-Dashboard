/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sp: "320px",
        xs: "425px",
        hilang: { max: "425px" },
        dropnav: { max: "639px" },
        notdropnav: "639px",
      },
      colors: {
        biruAlta: "#1B345F",
        orangeAlta: "#F7731C",
        putihAlta: "#F0F4FD",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

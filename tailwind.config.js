/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coral: "#FF6363",
        cyan: "#97FFDA",
      },
      spacing: {
        gutters: "87px",
      },
    },
    fontFamily: {
      body: ["Montserrat"],
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Sharp Sans"', "sans-serif"],
      },
      colors: {
        "dropbox-blue": "#0061FF",
        "dropbox-lightblue": "#E6F0FF",
      },
    },
  },
  plugins: [],
};

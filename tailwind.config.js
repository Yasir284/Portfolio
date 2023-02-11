/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "black-900": "#171717",
        "black-800": "#2E2E2E",
        "black-700": "#454545",
      },
      fontFamily: {
        Roboto: ["Roboto"],
        Balsamiq: ["Balsamiq Sans"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extends: {
      colors: {
        "black-900": "#171717",
        "black-800": "#2E2E2E",
        "black-700": "#454545",
      },
      fontFamily: {
        Roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        "primary": 'rgb(15, 20, 25)',
        "secondary": '#374151',
        "muted": '#86929b',

      }
    },
  },
  plugins: [],
}


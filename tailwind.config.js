/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      screens:{
        'xsm': '350px',
      },
      fontFamily: {
        nunito: 'Nunito Sans',
        unica: 'Unica One',
      },

    },
  },

  plugins: [require('tw-elements/dist/plugin')],
}

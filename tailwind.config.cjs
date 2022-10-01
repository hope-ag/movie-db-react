const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      primary: colors.indigo,
      success: colors.emerald,
      warning: colors.yellow,
      danger: colors.fuchsia,
      info: colors.sky,
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
}

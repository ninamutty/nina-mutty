const { cyan } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        blobWidthLg: '80vw',
        blobHeightLg: '90vh',
        blobWidthMd: '80vw',
        blobHeightMd: '90vh',
        blobWidthSm: '90vw',
        blobHeightSm: '90vh'
      },
      height: {
        blobWidthLg: '80vw',
        blobHeightLg: '90vh',
        blobWidthMd: '80vw',
        blobHeightMd: '90vh',
        blobWidthSm: '90vw',
        blobHeightSm: '90vh'
      },
      screens: {
        'portrait': {
            'raw': '(orientation: portrait)',
        },
        'landscape': {'raw': '(orientation: landscape)'},
      },
      colors: {
        warmGray: colors.warmGray,
        cyan: colors.cyan,
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

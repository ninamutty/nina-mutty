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
        blueGray: colors.blueGray,
        cran: {
          900: '#3B0D11',
          800: '#64161D',
          300: '#c9867f',
          200: '#e9cac3'
        },
        camel: {
          900: '#A7998B',
          800: '#C2B8AE',
          300: '#A7998B',
          200: '#C2B8AE'
        },
        armyGreen: {
          900: '#5B6057',
          800: '#989E94',
          300: '#a5a58d',
          200: '#b7b7a4'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

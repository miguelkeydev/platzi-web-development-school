/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/index.html",
    "./src/**/*.{html,js}"
  ],
  darkMode: 'class',
  theme: {
    colors: {
      black: {
        DEFAULT: '#000',
        50: '#343a40',
        100: '#212529',
        150: '#00000022',
      },
      gray: {
        DEFAULT: '#495057',
        50: '#adb5bd',
        100: '#6c757d',
        700: '#374151',
        900: '#111827',
      },
      primary: {
        DEFAULT: '#532b88',
        50: '#c8b1e4',
        100: '#9b72cf'
      },
      white: {
        DEFAULT: colors.white,
        50: '#ffffff10',
        100: '#ffffff80',
      },
      secondary: '#3C415C',
      tertiary: '#B4A5A5',
    },
    extend: {
      backgroundImage: {
        'hotel-1': "url('https://i.imgur.com/RwZT3tE.jpg')",
        'hotel-2': "url('https://i.imgur.com/6E6rsib.jpg')",
        'hotel-3': "url('https://i.imgur.com/FAb0qkT.jpg')",
        'hotel-4': "url('https://i.imgur.com/6B4R85s.jpg')",
        'hotel-5': "url('https://i.imgur.com/LUdYZIp.jpg')",
        'hotel-6': "url('https://i.imgur.com/KpnxmuG.jpg')",
        'hotel-7': "url('https://i.imgur.com/ZXuiZva.jpg')",
        'hotel-8': "url('https://i.imgur.com/pdud1L6.jpg')",
        'hotel-9': "url('https://i.imgur.com/cRYjmyR.jpg')",
        'hotel-10': "url('https://i.imgur.com/Rta7t7s.jpg')",
        'view-1': "url('https://i.imgur.com/XlVU9Tj.jpg')",
        'view-2': "url('https://i.imgur.com/SJ7MAGO.jpg')",
        'view-3': "url('https://i.imgur.com/1Qc5qGL.jpg')",
        'diningRoom-1': "url('https://i.imgur.com/UWXEJT9.jpg')",
        'diningRoom-2': "url('https://i.imgur.com/RzKDf7o.jpg')",
        'diningRoom-3': "url('https://i.imgur.com/dJpbLRQ.jpg')",
        'hotel-room': "url('https://i.imgur.com/6n6nUcb.jpg')",
        'lobby': "url('https://i.imgur.com/PDbN9KH.jpg')",
        'livingRoom': "url('https://i.imgur.com/Wk7M0j4.jpg')",
        'doubleRoom': "url('https://i.imgur.com/TfxuzTo.jpg')",
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}


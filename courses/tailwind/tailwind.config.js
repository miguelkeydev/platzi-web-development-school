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
        'hotel-1': "url('./public/assets/images/hotel-1.jpg')",
        'hotel-2': "url('./public/assets/images/hotel-2.jpg')",
        'hotel-3': "url('./public/assets/images/hotel-3.jpg')",
        'hotel-4': "url('./public/assets/images/hotel-4.jpg')",
        'hotel-5': "url('./public/assets/images/hotel-5.jpg')",
        'hotel-6': "url('./public/assets/images/hotel-6.jpg')",
        'hotel-7': "url('./public/assets/images/hotel-7.jpg')",
        'hotel-8': "url('./public/assets/images/hotel-8.jpg')",
        'hotel-9': "url('./public/assets/images/hotel-9.jpg')",
        'hotel-10': "url('./public/assets/images/hotel-10.jpg')",
        'view-1': "url('./public/assets/images/view-1.jpg')",
        'view-2': "url('./public/assets/images/view-2.jpg')",
        'view-3': "url('./public/assets/images/view-3.jpg')",
        'diningRoom-1': "url('./public/assets/images/dining-room-1.jpg')",
        'diningRoom-2': "url('./public/assets/images/dining-room-2.jpg')",
        'diningRoom-3': "url('./public/assets/images/dining-room-3.jpg')",
        'hotel-room': "url('./public/assets/images/room.jpg')",
        'lobby': "url('./public/assets/images/lobby.jpg')",
        'livingRoom': "url('./public/assets/images/living-room.jpg')",
        'doubleRoom': "url('./public/assets/images/double-room.jpg')",
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}


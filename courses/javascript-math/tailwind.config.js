/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./public/classes/**",
    "./public/javascript/**",
    "./src/**/*.{html,js}",
    "./src/styles.css"
  ],
  theme: {
    extend: {
      colors: {
        black: "#040D12",
        primary: {
          900: "#183D3D",
          800: "#265252",
          50: "#5c83744f",
        },
        secondary: "#5C8374",
        tertiary: "#93B1A6"
      },
      fontFamily: {
        Bricolage: ['Bricolage Grotesque', 'sans-serif']
      },
    },
  },
  plugins: [],
}
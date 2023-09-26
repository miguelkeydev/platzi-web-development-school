/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../public/**",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: "Roboto",
        Bruno: ["Bruno Ace SC", "cursive"]
      }, colors: {
        "card": "linear-gradient(180deg, #000 25%, #494949 60%, #c6c6c6 100%)"
      },
      backgroundImage: {
        "body": "url('https://res.cloudinary.com/dziyyutwr/image/upload/v1692066465/Platzi%20Portfolio/wpp_phone_oqcq2z.jpg')"
      },
      backgroundSize: {
        "100": "100% 100%"
      },
      screens: {
        "3xl": "1800px"
      }
    },
  },
  plugins: [],
}


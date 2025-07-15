// tailwind.config.js
module.exports = {
    darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5F6FFF",
      },
      gridTemplateColumns:{
        'auto': 'repeat(auto-fill, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
  }
  
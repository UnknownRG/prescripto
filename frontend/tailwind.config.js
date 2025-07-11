/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          primary: '#5f6FFF', // 🎨 your custom primary color
        },
      },
    },
    plugins: [],
  }
  
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: ['group-hover'],
      fontFamily: {
        accent: 'Bebas Neue, sans-serif'
      }
    },
  },
  plugins: [],
}


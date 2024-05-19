/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'BrightRed': 'hsl(12, 88%, 59%)',
        'VeryPaleRed': 'hsl(13, 100%, 96%)',
        'DarkBlue': 'hsl(228, 39%, 23%)',
        'VeryDarkBlue': 'hsl(233, 12%, 13%)',
        'DarkGrayishBlue': 'hsl(227, 12%, 61%)',
        'VaryLightGray': 'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
}


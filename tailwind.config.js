/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        setColour1: '#a3263a',
        setColour2: '#0d1d75',
      }
    },
  },
  plugins: [],
}


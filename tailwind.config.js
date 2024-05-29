/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        setColour1: '#DF1318',
        setColour2: '#0d1d75',
      }
    },
  },
  plugins: [],
}


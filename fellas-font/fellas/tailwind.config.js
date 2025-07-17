/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pizza-red': '#d32f2f',
        'pizza-orange': '#ff9800',
        'pizza-yellow': '#ffc107',
        'pizza-green': '#4caf50',
        'pizza-cream': '#fff8e1',
        'pizza-dark': '#1a1a1a',
      }
    },
  },
  plugins: [],
}
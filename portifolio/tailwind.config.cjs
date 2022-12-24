/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'm-movel': '375px',
      'l-movel': '425px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1440px',
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
        'fira': ['Fira Sans', 'sans-serif'],
        'gideon': ['Gideon Roman', 'serif'],
        'megrim': ['Megrim', 'cursive'],
        'tourney': ['Tourney', 'sans-serif'],
        'monster': ['Montserrat Subrayada', 'sans-serif'],
        'anton': ['Anton SC', 'sans-serif'],
      },
      colors: {
        'light-blue': '#D9EAF2',
        'light-green': '#D2F4D2',
        'royal-golden': '#F7D04D',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
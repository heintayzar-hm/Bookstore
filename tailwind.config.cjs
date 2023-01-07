/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: '#0290ff',
        brown: '#121212',
        lightblue: '#4386bf',
      },
      fontFamily: {
        normal: ['Roboto Slab', 'sans-serif'],
        important: ['Montserrat', 'Roboto Slab', 'sans-serif'],
      },
      screens: {
        xs: '350px',
      },
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
};

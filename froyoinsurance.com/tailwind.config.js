/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './success.html',
    './js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#653316',
        secondary: '#EAB308',
        success: '#10B981',
        danger: '#DC2626',
        icecream: {
          vanilla: '#FFF8E1',
          chocolate: '#D7CCC8',
          strawberry: '#F7D2BD',
          mint: '#C8E6C9',
          blueberry: '#F7D2BD',
        }
      },
    },
  },
  plugins: [],
  corePlugins: {
    // Disable unused features
    container: false,
    float: false,
    clear: false,
    objectFit: false,
    objectPosition: false,
    overscroll: false,
    placeholderColor: false,
    placeholderOpacity: false,
    ringColor: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
    ringOpacity: false,
    ringWidth: false,
  },
}

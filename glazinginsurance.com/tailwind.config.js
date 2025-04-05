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
    primary: {
      DEFAULT: '#0A3D62',
      dark: '#082A47',
      light: '#0C4B7A'
    },
    secondary: {
      DEFAULT: '#3498DB',
      dark: '#2980B9',
      light: '#5DADE2'
    },
    accent: '#AED6F1',
    background: '#F2F2F2',
    white: '#FFFFFF',
    success: '#10B981',
    danger: '#DC2626',
  },
  fontFamily: {
    sans: ['Open Sans', 'sans-serif'],
    heading: ['Montserrat', 'sans-serif'],
    body: ['Open Sans', 'sans-serif'],
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

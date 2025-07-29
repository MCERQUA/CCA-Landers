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
          DEFAULT: '#0B3C5D',
          navy: '#0B3C5D',
          teal: '#328CC1',
          light: '#328CC1'
        },
        secondary: {
          DEFAULT: '#D9D9D9', 
          gray: '#D9D9D9',
          orange: '#F47B20',
          charcoal: '#212529'
        },
        announcement: '#F47B20',
        success: '#059669',
        danger: '#DC2626',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
        accent: ['Montserrat', 'sans-serif']
      },
      borderRadius: {
        'button': '4px'
      }
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

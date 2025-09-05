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
          DEFAULT: '#1E3A8A',  // Deep Blue
          light: '#3B82F6'     // Royal Blue
        },
        secondary: {
          gray: '#E5E7EB',     // Silver Gray
          red: '#B91C1C',      // Dark Red
          dark: '#1F2937'      // Dark Gray
        },
        success: '#10B981',
        danger: '#DC2626',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif']
      },
      borderRadius: {
        DEFAULT: '4px',
      },
      boxShadow: {
        card: '0 2px 4px rgba(0, 0, 0, 0.05)',
        button: '0 2px 4px rgba(0, 0, 0, 0.1)',
        hover: '0 4px 6px rgba(0, 0, 0, 0.1)'
      },
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
        'transform': 'transform'
      },
      transitionDuration: {
        DEFAULT: '200ms',
        hover: '300ms'
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

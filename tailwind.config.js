/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
      },

      colors: {
        primary: {
          100: '#04B2D9',
          200: '#024873',
        },
        secondary: {
          100: '#F2CB05',
          200: '#F2B807',
        },
      },

      animation: {
        'gradient-x': 'gradient-x 5s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },

      screens: {
        xs: '464px',
      }
    },
  },
  plugins: [],
}

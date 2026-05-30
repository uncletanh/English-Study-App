/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./js/**/*.js",
    "./data/**/*.json"
  ],
  theme: {
      extend: {
          fontFamily: {
              sans: ['Nunito', 'sans-serif'],
          },
          colors: {
              funSky: {
                  50: '#f0f9ff',
                  100: '#e0f2fe',
                  400: '#38bdf8',
                  500: '#0ea5e9',
                  600: '#0284c7',
              },
              funAmber: {
                  400: '#fbbf24',
                  500: '#f59e0b',
              },
              funEmerald: {
                  100: '#d1fae5',
                  400: '#34d399',
                  500: '#10b981',
              }
          },
          animation: {
              'spin-slow': 'spin 3s linear infinite',
          }
      }
  },
  plugins: [],
}


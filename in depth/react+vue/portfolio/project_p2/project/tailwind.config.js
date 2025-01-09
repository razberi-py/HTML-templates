/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#1E1E1E',
          secondary: '#2D2D2D',
          text: '#E0E0E0'
        },
        accent: {
          teal: '#4DB6AC',
          purple: '#9C27B0',
          orange: '#FF5722'
        }
      },
      animation: {
        cursor: 'cursor 1s infinite',
        pulse: 'pulse 2s infinite'
      },
      keyframes: {
        cursor: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }
        }
      }
    }
  },
  plugins: []
}
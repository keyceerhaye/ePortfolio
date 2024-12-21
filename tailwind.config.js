/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8'
        },
        secondary: {
          DEFAULT: '#7c3aed',
          dark: '#6d28d9'
        },
        accent1: {
          DEFAULT: '#f59e0b',
          dark: '#d97706'
        },
        accent2: {
          DEFAULT: '#10b981',
          dark: '#059669'
        },
        background: {
          DEFAULT: '#ffffff',
          dark: '#111827'
        },
        textColor: {
          DEFAULT: '#1f2937',
          dark: '#f3f4f6'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Quicksand', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 
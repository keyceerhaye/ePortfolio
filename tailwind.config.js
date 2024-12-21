/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD1DC',    // Pastel Pink
        secondary: '#B5EAD7',  // Mint Green
        accent1: '#C7CEEA',    // Soft Blue
        accent2: '#FFDAC1',    // Peach
        textColor: '#6B7280',  // Soft Gray
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
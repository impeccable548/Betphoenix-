/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#1a73e8',
          light: '#4dabf7',
          dark: '#174ea6',
        },
      },
    },
  },
  plugins: [],
};
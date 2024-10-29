/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mclaren: ['McLaren', 'cursive'],
      },
      boxShadow: {
        '3xl': '0 1px 5px rgb(138, 137, 137)',
        '4xl': '0 1px 3px rgba(0, 0, 0, 0.3);'
      }
    },
  },
  plugins: [],
}


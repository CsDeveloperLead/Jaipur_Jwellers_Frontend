/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0px 4px 80px 0px rgba(0, 0, 0, 0.05)',
        'custom': '0px 4px 50px 10px #0000001A',
      },
      fontFamily: {
        marcellus: ['Marcellus', 'serif'],
        bellota: ['"Bellota Text"', 'cursive'],
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'star': '#FFAE00',
        'yellow': '#FFB800',
        'gray-1': '#F2F4F8',
        'gray-3': '#CCD0D6',
        'gray-4': '#ACB1BA',
        'gray-5': '#737A86',
        'gray-7': '#333E4F',
        'gray-8': '#19202D'
      }
    },
  },
  plugins: [],
}

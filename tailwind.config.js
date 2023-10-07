/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'tea-green': '#f6faf0',
      'olivine': '#AFC97E',
      'littledark': '#d4e6b5',
      'flax': '#E2D686',
      'naples-yellow': '#FFDF64',
      'shipgray': '#877B66',
    }
  },
  plugins: [require("daisyui")],
}


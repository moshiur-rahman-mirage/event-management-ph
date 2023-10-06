/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'tea-green': '#D4E6B5',
      'olivine': '#AFC97E',
      'flax': '#E2D686',
      'naples-yellow': '#FFDF64',
      'shipgray': '#877B66',
    }
  },
  plugins: [require("daisyui")],
}


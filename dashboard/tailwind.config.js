/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo-purple': '#8B5CF6',
        'neo-cyan': '#06B6D4',
        'neo-pink': '#EC4899',
      },
    },
  },
  plugins: [],
}

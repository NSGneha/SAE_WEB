/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sae: {
          red: '#D90429', // Dark red/primary
          dark: '#0a0a0a', // Deep background
          accent: '#FF4D00', // Orange/Red glow
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Syncopate', 'sans-serif'], // For the "UpSkilly" style large headers
      },
    },
  },
  plugins: [],
}

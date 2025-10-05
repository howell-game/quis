// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",     // Red
        secondary: "#00AA00",   // Green
        base: "#F8F8F8",        // Off white
        dark: "#000000",        // Black
      },
    },
  },
  plugins: [],
}

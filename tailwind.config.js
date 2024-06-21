module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#9CADCE', // Moonstone
        secondary: '#D1CFE2', // Powder blue
        accent: '#9CADCE', // Thistle
        textPrimary: '#333', // Text Color
        background: '#F7F7F7', // Background Color
      },
    },
  },
  plugins: [],
}

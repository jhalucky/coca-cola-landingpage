module.exports = {
  darkMode: "media",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
      shine: 'shine 5s linear infinite',
  },
  keyframes: {
    shine: {
      '0%': { transform: 'translateX(-100%) rotate(12deg)' },
      '100%': { transform: 'translateX(200%) rotate(12deg)' },
    },
  },
    },
  },
  plugins: [],
}
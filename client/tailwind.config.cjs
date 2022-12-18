/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "custom": {
          "c1": "#f3f0ec",
          "100": "#BCCEF8",
          "200": "#b6c6ff",
          "300": "#acbcff",
          "400": "#a2b2ff",
          "500": "#98a8f8",
          "600": "#8e9eee",
          "700": "#8494e4",
          "800": "#7a8ada",
          "900": "#7080d0"
        }
      }
    }
  },
  plugins: [],
}

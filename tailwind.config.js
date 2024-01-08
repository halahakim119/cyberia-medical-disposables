/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#f0f3f5",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#528195",
        "primary-300": "#67A2BB",
        "primary-500": "#8CDCFF",
        "secondary-400": "#1FA680",
        "secondary-500": "#26CC9D",
      },
   
      backgroundImage: (theme) => ({
        "gradient-blue":
          `linear-gradient(90deg, ${theme("colors.primary-300")} 0%, ${theme("colors.primary-500")} 100%)`,
        "gradient-green":
          `linear-gradient(90deg, ${theme("colors.secondary-400")} 0%, ${theme("colors.secondary-500")} 100%)`,
          "mobile-home": "url('./assets/medical.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
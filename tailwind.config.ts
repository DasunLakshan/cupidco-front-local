// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        card: "0.5rem",
      },
      translate: {
        "2/5": "20%",
        "2/4": "200%",
        "12/12": "220%",
      },
      colors: {
        "primary-purple": "#4D194D",
        "footer-pink": "#ffe3f9",
        "online-state": "#57f000",
        "offline-state": "#c3282a",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "playfair-display": ["Playfair Display", "serif"],
        Quicksand: ["Quicksand", "sans-serif"],
      },
      screens: {
        xs: "468px",
      },
    },
  },
  plugins: [require("flowbite/plugin"), nextui()],
  darkMode: "class",
};

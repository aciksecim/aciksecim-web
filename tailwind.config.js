/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#000000",
        brandColor: "#00BAC6",
        brandColorLigth: "#6EDBE3",
        brandColorMd: "#00868F",
        brandColorDark: "#2B6F83",
        brandColorGray: "#818181",
        brandColorLightGray: "#D8E6E2",
        veryLightGray: "#",
      },
      fontFamily: {
        "aciksecim-font": ["Source+Sans+Pro", "sans-serif"],
      },
      fontSize: {
        "2xs": ".65rem",
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "1.5xl": "1.375rem",
        "2xl": "1.5rem",
        "2.5xl": "1.625rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      fontWeight: {
        extralight: 100,
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
        "extra-bold": 800,
        black: 900,
      },
      lineHeight: {
        60: "3rem",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "90%": "90%",
        "50%": "50%",
        16: "4rem",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
}
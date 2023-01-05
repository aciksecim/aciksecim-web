/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
=======

>>>>>>> 1007f31553cfb4487db9d74ad95b637d721473c3
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
<<<<<<< HEAD
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
=======
>>>>>>> 1007f31553cfb4487db9d74ad95b637d721473c3
  ],
  theme: {
    extend: {
      colors: {
        dark: "#000000",
<<<<<<< HEAD
        brandColorLigth: "#8BCCD8",
        brandColor: "#48b7c4",
        brandColorMd: "#3CA3AE",
        brandColorDark: "#30848D",
        brandColorGray: "#CBE2E3",
        brandColorLightGray: "#F2F4EE",
      },
      fontFamily: {
        "aciksecim-font": ["Source Sans Pro", "sans-serif"],
=======
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
>>>>>>> 1007f31553cfb4487db9d74ad95b637d721473c3
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
<<<<<<< HEAD
        light: 300,
        normal: 400,
        medium: 600,
        bold: 700
=======
        extralight: 100,
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
        "extra-bold": 800,
        black: 900,
>>>>>>> 1007f31553cfb4487db9d74ad95b637d721473c3
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
<<<<<<< HEAD
};
=======
}
>>>>>>> 1007f31553cfb4487db9d74ad95b637d721473c3

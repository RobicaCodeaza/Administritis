/** @type {import('tailwindcss').Config} */

import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primaryLight: "#e8e6f3",
        primaryDark: "#05011a",
        secondary: "#7752FE",
        secondary1: "#8E8FFA",
        colorAccent1: "#F75A47",
        colorAccent2: "#FF9E11",
        greyLight: "#ddd",
        greyLight1: "#c5c5c5",
        greyLight2: "#acacac",
        greyDark: "#626262",
        greyDark1: "#4a4a4a",
        greyDark2: "#313131",
        white: "#f6f6f6",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

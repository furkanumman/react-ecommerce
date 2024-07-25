/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: false,
  theme: {
    container: {
      center: true,
    },

    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1400px",
    },

    fontFamily: {
      kanit: ["Kanit", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },

    extend: {
      colors: {
        primary: {
          light: "#60a3bc",
          DEFAULT: "#3c6382",
          dark: "#0a3d62",
        },
        secondary: {
          light: "#38ada9",
          DEFAULT: "#079992",
          dark: "#0e615f",
        },
        light: {
          light: "#f1f2f6",
          DEFAULT: "#dfe4ea",
          dark: "#ced6e0",
        },
        dark: {
          light: "#a4b0be",
          DEFAULT: "#747d8c",
          dark: "#57606f",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        xl: "1170px",
      },
    },
    extend: {
      fontFamily: {
        primary: ["Montserrat"],
        secondary: ["Bebas Neue"],
      },
      colors: {
        blue: {
          a300: "rgba(46, 103, 222, 0.3)",
          25: "#E9F0FF",
          50: "#6798FF",
          100: "#2E67DE",
        },
        purple: {
          25: "rgba(187, 66, 245, 0.06)",
          500: "#BB42F5",
        },
        gray: {
          a200: "rgba(255,255,255,0.2)",
          a300: "rgba(255,255,255,0.3)",
          50: "#CDD1DF",
          400: "#868899",
        },
        "light-grey": "#CDD1DF",
      },
      padding: {
        17.5: "4.375rem",
      },
      margin: {
        22: "5.5rem",
      },
      borderRadius: {
        3.5: "14px",
        5: "20px",
        25: "100px",
      },
    },
  },
  plugins: [],
};

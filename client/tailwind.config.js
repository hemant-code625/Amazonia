/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        amazon: {
          DEFAULT: "#131921",
          light: "#232F3E",
          yellow: "#FFD814",
          orange: "#FF9900",
        },
      },
      screens: {
        "max-navLen": { max: "1103px" },
      },
      fontSize: {
        "2xs": "0.625rem",
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};

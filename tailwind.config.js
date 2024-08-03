/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0063DB",
        primaryHover: "#0053B3",
        secondary: "#AFBBF2",
        secondaryHover: "#8B9CE5",
        white: "#F7F4F3",
        accent: "#D90000",
        accentHover: "#B80000",
        black: "#141414",
        blackHover: "#000000",
      },
    },
  },
  plugins: [],
};

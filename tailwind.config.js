/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
import forms from "@tailwindcss/forms";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {
      backgroundImage: {
        cardWaveTopLeft: "url('/assets/blobs/cardWaveTopLeft.svg')",
        cardWaveTopRight: "url('/assets/blobs/cardWaveTopRight.svg')",
        cardWaveTopMiddle: "url('/assets/blobs/cardWaveTopMiddle.svg')",
        cardWaveBottomLeft: "url('/assets/blobs/cardWaveBottomLeft.svg')",
        cardWaveBottomRight: "url('/assets/blobs/cardWaveBottomRight.svg')",
        abstractShapeA: "url('/assets/blobs/abstractShapeA.svg')",
        characterOnDesk: "url('/assets/images/character-on-desk.png')",
        logoIcon: "url('/assets/images/logo-icon.png')",
        placeFillerBauhausA: "url('/assets/blobs/placeFillerBauhausA.svg')",
        placeFillerBauhausB: "url('/assets/blobs/placeFillerBauhausB.svg')",
        placeFillerBauhausC: "url('/assets/blobs/placeFillerBauhausC.svg')",
      },
      colors: {
        primary: "#0063DB",
        primaryHover: "#0053B3",
        secondary: "#AFBBF2",
        secondaryHover: "#8B9CE5",
        white: "#F7F4F3",
        accent: "#D90000",
        accentHover: "#B80000",
        black: "#141414",
        blackContrast: "#1A1A1A",
        blackHover: "#000000",
      },
      screens: {
        xs: "480px",
      },
      borderWidth: {
        3: "3px",
      },
      minWidth: {
        36: "9rem",
        44: "11rem",
        56: "14rem",
        60: "15rem",
        72: "18rem",
        80: "20rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      zIndex: {
        60: "60",
      },
    },
  },
  darkMode: "class",

  plugins: [
    forms,
    // add custom variant for expanding sidebar
    plugin(({ addVariant, e }) => {
      addVariant("sidebar-expanded", ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) =>
            `.sidebar-expanded .${e(
              `sidebar-expanded${separator}${className}`
            )}`
        );
      });
    }),
  ],
};

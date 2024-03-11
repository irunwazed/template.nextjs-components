import type { Config } from "tailwindcss";

// const {
//   default: flattenColorPalette,
// } = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#3E63DD",
        "primary-light": "#D6E1FF",
        "primary-dark": "#253974",
        "secondary": "#696E77",
        "secondary-light": "#EDEEF0",
        "secondary-dark": "#212225",
        "background": "#f4f2ee",
        "background-dark": "#293138",
        // "tersier": "#172d44",
    },

    },
  },
  plugins: [],
  // plugins: [addVariablesForColors],
};
// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
// function addVariablesForColors({ addBase, theme }: any) {
//   let allColors = flattenColorPalette(theme("colors"));
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );
 
//   addBase({
//     ":root": newVars,
//   });
// }
export default config;

import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(166.82% 166.82% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      white: "var(--white)",
      purple: "var(--purple)",
      "purple-button-hover": "var(--purple-button-hover)",
      blue: "var(--blue)",
      "blue-button-hover": "var(--blue-button-hover)",
      "blue-link-hover": "var(--blue-link-hover)",
      orange: "var(--orange)",
      "blue-sky": "var(--blue-sky)",
      "dark-primary": "var(--dark-primary)",
      "dark-secondary": "var(--dark-secondary)",
      gray: "var(--gray)",
      "gray-dark": "var(--gray-dark)",
      "gray-light": "var(--gray-light)",
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        radius: {
          medium: "10px",
        },
      },
      // themes: {
      //   light: {
      //     layout: {
      //       hoverOpacity: 0,
      //     },
      //   },
      //   dark: {
      //     layout: {
      //       hoverOpacity: 0,
      //     },
      //   },
      // },
    }),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".h1": {
          fontSize: "1.5rem",
          fontWeight: "700",
          lineHeight: "35px",
          letterSpacing: "-0.33px",
        },
        ".h2": {
          fontSize: "1.25rem",
          fontWeight: "700",
          lineHeight: "29px",
          letterSpacing: "-0.25px",
        },
        ".h3": {
          fontSize: "1.125rem",
          fontWeight: "700",
          lineHeight: "26px",
          letterSpacing: "-0.25px",
        },
        ".h4": {
          fontSize: "0.875rem",
          fontWeight: "700",
          lineHeight: "20px",
          letterSpacing: "-0.2px",
        },
        ".p1": {
          fontSize: "1rem",
          lineHeight: "23px",
        },
        ".p2": {
          fontSize: "0.9375rem",
          lineHeight: "22px",
        },
        ".p3": {
          fontSize: "0.8125rem",
          lineHeight: "19px",
        },
      });
    }),
  ],
};
export default config;

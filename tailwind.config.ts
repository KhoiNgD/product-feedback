import type { Config } from "tailwindcss";
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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      purple: "#AD1FEA",
      blue: "#4661E6",
      orange: "#F49F85",
      "blue-sky": "#62BCFA",
      "dark-primary": "#373F68",
      "dark-secondary": "#3A4374",
      gray: "#F2F4FF",
      "gray-dark": "#647196",
      "gray-light": "#F7F8FD",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;

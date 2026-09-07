import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1a2b4a",
          secondary: "#2d4a7a",
          accent: "#c9a96e",
          "accent-light": "#e8d4a8",
        },
        surface: {
          primary: "#fafaf8",
          secondary: "#f0ede8",
          dark: "#0f1a2e",
          "dark-secondary": "#172236",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

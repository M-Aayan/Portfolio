import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#08090D",
          surface: "#101116",
          card: "#15171D",
          border: "#262832",
        },
        light: {
          bg: "#F8F9FC",
          surface: "#FFFFFF",
          card: "#F1F3F8",
          border: "#E2E5F0",
          textPrimary: "#0D0F14",
          textSecondary: "#525866",
        },
        accent: {
          DEFAULT: "#8B3DFF",
          light: "#B56CFF",
          glow: "rgba(139, 61, 255, 0.15)",
        },
        primaryText: "#F5F5F5",
        secondaryText: "#A5A7B0",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 30px -5px rgba(139, 61, 255, 0.25)",
        card: "0 8px 30px rgba(0, 0, 0, 0.4)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#F3F1EB",
        surface: {
          base: "#F3F1EB",
          1: "#FFFFFF",
          2: "#EBE8E0",
          3: "#DFDBD1",
          elevated: "#F8F6F1",
        },
        border: {
          subtle: "rgba(27, 26, 23, 0.09)",
          medium: "rgba(27, 26, 23, 0.15)",
          strong: "rgba(27, 26, 23, 0.22)",
          accent: "rgba(154, 91, 69, 0.35)",
        },
        brand: {
          50: "#F7EEE9",
          100: "#F0E2DB",
          200: "#E2C8BC",
          300: "#D0A695",
          400: "#B97962",
          500: "#9A5B45",
          600: "#8B4F3B",
          700: "#7F4736",
          800: "#63382C",
          900: "#47281F",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "Plus Jakarta Sans",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "JetBrains Mono",
          "Fira Code",
          "monospace",
        ],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

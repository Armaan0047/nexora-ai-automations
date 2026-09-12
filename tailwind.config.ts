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
        background: "#080A0F",
        surface: {
          base: "#080A0F",
          1: "#0D111A",
          2: "#131926",
          3: "#1A2234",
          elevated: "#101624",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.07)",
          medium: "rgba(255, 255, 255, 0.12)",
          strong: "rgba(255, 255, 255, 0.2)",
          accent: "rgba(59, 130, 246, 0.35)",
        },
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
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

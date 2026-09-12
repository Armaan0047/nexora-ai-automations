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
        background: "#121210",
        surface: {
          base: "#121210",
          1: "#191815",
          2: "#201E1A",
          3: "#292620",
          elevated: "#1C1B17",
        },
        border: {
          subtle: "rgba(238, 234, 225, 0.08)",
          medium: "rgba(238, 234, 225, 0.14)",
          strong: "rgba(238, 234, 225, 0.20)",
          accent: "rgba(179, 111, 86, 0.38)",
        },
        brand: {
          50: "#F5EAE4",
          100: "#EBD7CE",
          200: "#DDB9AA",
          300: "#CF9A87",
          400: "#C0816A",
          500: "#B36F56",
          600: "#A3604A",
          700: "#955744",
          800: "#744334",
          900: "#513027",
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

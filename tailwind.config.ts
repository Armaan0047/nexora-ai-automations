import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#11100E",
        surface: {
          DEFAULT: "#1A1916",
          base: "#11100E",
          1: "#1A1916",
          2: "#24221E",
          3: "#2D2A25",
          elevated: "#24221E",
        },
        studio: {
          bg: "#11100E",
          surface: "#1A1916",
          elevated: "#24221E",
          border: "#35312B",
          copper: "#C9784A",
          "copper-hover": "#E09A68",
          primary: "#F2EEE6",
          secondary: "#A7A096",
          status: "#8FA58A",
        },
        border: {
          DEFAULT: "#35312B",
          subtle: "#2A2722",
          medium: "#35312B",
          strong: "#4A453D",
          accent: "#C9784A",
        },
        copper: {
          DEFAULT: "#C9784A",
          hover: "#E09A68",
          light: "#F4D2BC",
          dark: "#9E552E",
          muted: "rgba(201, 120, 74, 0.15)",
        },
        status: {
          green: "#8FA58A",
          "green-muted": "rgba(143, 165, 138, 0.15)",
        },
        brand: {
          50: "#FAF7F2",
          100: "#F2EEE6",
          200: "#E3DDD2",
          300: "#C8BEB0",
          400: "#A7A096",
          500: "#C9784A",
          600: "#B86638",
          700: "#9E552E",
          800: "#7A3F1F",
          900: "#4F2610",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        serif: [
          "var(--font-serif)",
          "Newsreader",
          "Playfair Display",
          "Georgia",
          "Cambria",
          "serif",
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

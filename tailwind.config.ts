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
        toffee: {
          DEFAULT: "#c2622b",
          deep: "#a24a1a",
          ink: "#8e3f15",
        },
        honey: {
          DEFAULT: "#f2be6b",
          soft: "#fbe3b4",
        },
        cocoa: {
          DEFAULT: "#2a170e",
          soft: "#5a3a28",
        },
        milk: {
          DEFAULT: "#fffdf8",
        },
        sky: {
          DEFAULT: "#bfddf5",
          deep: "#2f6e9e",
        },
        blush: {
          DEFAULT: "#f9cdbf",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        plush: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-figtree)", "ui-sans-serif", "system-ui", "sans-serif"],
        hand: ["var(--font-shantell)", "ui-rounded", "Comic Sans MS", "cursive"],
        scrawl: ["var(--font-shantell)", "ui-rounded", "Comic Sans MS", "cursive"],
      },
      transitionTimingFunction: {
        pounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        silk: "cubic-bezier(0.22, 1, 0.36, 1)",
        snap: "cubic-bezier(0.7, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;


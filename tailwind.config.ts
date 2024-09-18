import type { Config } from "tailwindcss";
import animateCSS from "tailwind-animatecss";

const config: Config = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [animateCSS],
};

export default config;

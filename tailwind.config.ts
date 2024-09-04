import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {},
    colors: {
      "txt-secondary": "#636262",
    },
  },
  plugins: [],
};

export default config;

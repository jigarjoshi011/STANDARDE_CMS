import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient":
          "linear-gradient(270deg, #000000 0.4%, #000000 1.16%, #FFFFFF 0.3%, #000000 0.42%)",
      },
    },
    colors: {
      primaryBlack: "#111111",
    },
    fontFamily: {
      poppins: ["Poppins, sans-serif"],
    },
  },
  plugins: [],
};
export default config;

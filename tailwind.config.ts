import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "1rem",
        center: true,
        screens: {
          sm: "1280px",
          md: "1280px",
          lg: "1366px",
          xl: "1480px",
          "2xl": "1588px",
        },
      },
      listStyleImage: {
        // bulletIMG: "url(/point-arrow.svg)",
        // bulletGreenIMG: "url(/point-arrow-green.svg)",
      },
      colors: {
        "text-primary": "#BBBBBB",
        "text-second": "#999999",
        "footer-primary": "#EFEDFD",
        "btn-primary": "#320E5C",
      },
      backgroundImage: {
        // titleShape: "url('/title_yellow_shape.svg')",
      },
      boxShadow: {
        // usericon: "0px 9px 34px 0px rgba(0, 0, 0, 0.20);",
        // cardShadow: "0px 4px 10px rgba(17, 17, 17, 0.08);",
        // card: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
      },
      fontFamily: {
        poppins: ["Poppins, sans-serif"],
      },

      spacing: {
        "70px": "70px",
        "100px": "100px",
        "100dvh": "100dvh",
        unset: "unset",
      },
      fontSize: {
        0: "0",
        "76px": "76px",
        "32px": "32px",
        unset: "unset",
      },
      lineHeight: {
        1: "1",
        "79px": "79px",
        unset: "unset",
        Normal: "normal",
      },
      letterSpacing: {
        "03em": "0.03em",
        "0.96px": "0.96px",
      },
    },
  },
  plugins: [],
};
export default config;

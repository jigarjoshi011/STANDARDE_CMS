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
        "bg-primary": "#03011B",
        "bg-second": "#111112",
        "bg-third": "#F3F3F3",
        "card-bg": "#18181A",
        "text-primary": "#BBBBBB",
        "text-second": "#999999",
        "text-fourth": "#434343",
        "text-third": "#333333",
        "text-fifth": "#505051",
        "footer-primary": "#EFEDFD",
        "btn-primary": "#320E5C",
        "card-primary": "#171718",
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
        "30rem": "30rem",
        "70px": "70px",
        "80px": "80px",
        "100px": "100px",
        "112px": "112px",
        "160px": "160px",
        "348px": "348px",
        "560px": "560px",
        "580px": "580px",
        "100dvh": "100dvh",
        unset: "unset",
      },
      fontSize: {
        0: "0",
        "28px": "28px",
        "40px": "40px",
        "52px": "52px",
        "76px": "76px",
        "80px": "80px",
        "32px": "32px",
        unset: "unset",
      },
      lineHeight: {
        1: "1",
        "1.25rem": "1.25rem", 
        "3.25rem": "3.25rem", 
        "79px": "79px",
        
        unset: "unset",
        Normal: "normal",
      },
      letterSpacing: {
        "03em": "0.03em",
        "0.96px": "0.96px",
      },
      borderRadius: {
        '20px': '20px',
        '32px': '32px',
        '40px': '40px',
      },
    },
  },
  plugins: [],
};
export default config;

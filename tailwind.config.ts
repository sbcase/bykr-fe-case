import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        "dark-brown": "#78350F",
        black: "#0F172A",
        "light-brown": "#8C4C00",
        "pale-yellow": "#FDE68A",
        "dark-red": "#8C0000",
        "light-yellow": "#FEF3C7",
        "off-yellow": "#FEFBED",
        orange: "#FBBF24",
        border: "#E2E8F0",
        gray: "#475569",
      },
      screens: {
        sm: "640px",
        lg: "1024px",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, white 45%, #FEF3C7 45%)",
        "gradient-hero-lg": "linear-gradient(152deg, #FEFBED 54%, #FEF3C7 54%)",
      },
      boxShadow: {
        "card-shadow": "0px 25px 50px -12px #FFFFFF40",
        "video-shadow":
          "rgba(0, 0, 0, 0.07) 0px 0px 15px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
      },
    },
  },
  plugins: [],
};

export default config;

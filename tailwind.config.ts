import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#131313",
        white: "#F5F5F5",
        gray: "#7D7D7D",
        background: "#F5F5F5",
        foreground: "#171717",
        "background-dark": "#0a0a0a",
        "foreground-dark": "#ededed",
      },
      backgroundImage: {
        noiseonwhite: "url('/effects/GrainEffectonWhite.svg')",
        noiseonblack: "url('/effects/GrainEffectonBlack.svg')",
        cubeWhite: "url('/background/BgPattern.svg')",
        cubeBlack: "url('/background/BgPattern.png')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      fontSize: {
        // Mobile styles
        title: [
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "-1px",
          },
        ],
        heading: [
          "24px",
          {
            lineHeight: "32px",
          },
        ],
        content: [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
        button: [
          "14px",
          {
            lineHeight: "20px",
          },
        ],
        content2: [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
        content3: [
          "14px",
          {
            lineHeight: "20px",
          },
        ],

        // Desktop styles
        "lg-title": [
          "144px",
          {
            lineHeight: "144px",
            fontWeight: "900",
            letterSpacing: "-3%",
          },
        ],
        "lg-heading": [
          "80px",
          {
            fontWeight: "900",
            lineHeight: "96.82px",
          },
        ],
        "lg-content": [
          "32px",
          {
            fontWeight: "500",
            lineHeight: "43.2px",
          },
        ],
        "lg-content2": [
          "32px",
          {
            fontWeight: "700",
            lineHeight: "43.2px",
          },
        ],
        "lg-button": [
          "24px",
          {
            fontWeight: "500",
            lineHeight: "32.4px",
          },
        ],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-balance": {
          textWrap: "balance",
        },
      });
    },
    require("@tailwindcss/forms"),
  ],
};

export default config;

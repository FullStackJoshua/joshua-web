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
        white: {
          25: "#F5F5F5",
        },
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
        satoshi: ["Satoshi Variable", "sans-serif"],
      },
      fontSize: {
        title: [
          "144px",
          {
            lineHeight: "144px",
            letterSpacing: "-4.32px",
          },
        ],
        heading: [
          "80px",
          {
            lineHeight: "96.82px",
          },
        ],
        content: [
          "32px",
          {
            lineHeight: "43.2px",
          },
        ],
        content2: [
          "32px",
          {
            lineHeight: "43.2px",
            fontWeight: "700",
          },
        ],
        content3: [
          "24px",
          {
            lineHeight: "31.2px",
          },
        ],
        button: [
          "24px",
          {
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
  ],
};

export default config;

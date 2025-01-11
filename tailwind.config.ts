import plugin from "tailwindcss/plugin";
import type { PluginAPI, Config } from "tailwindcss/types/config";

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
        title: "36px",
        heading: "30px",
        content: "16px",
        content2: "16px",
        content3: "14px",
        button: "14px",
        lgTitle: "128px",
        lgHeading: "96px",
        lgContent: "30px",
        lgContent2: "30px",
        lgContent3: "24px",
        lgButton: "24px",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: { addUtilities: PluginAPI["addUtilities"] }) {
      addUtilities({
        ".text-balance": {
          textWrap: "balance",
        },
      });
    }),
    require("@tailwindcss/forms"),
  ],
};

export default config;

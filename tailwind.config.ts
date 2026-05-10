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
        ivoire: "#F7F2EA",
        creme: "#EFE7D8",
        sable: "#E0D2BC",
        argile: "#C9A687",
        terra: "#A8744E",
        cerisier: "#5C2E1F",
        charbon: "#1F1B16",
        graphite: "#4A4239",
        pierre: "#8A8278",
      },
      fontFamily: {
        prata: ["Prata", "serif"],
        redhat: ['"Red Hat Display"', "sans-serif"],
      },
      fontSize: {
        "hero": ["clamp(2.5rem,5vw,4rem)", { lineHeight: "1.1" }],
        "section": ["clamp(2rem,3.5vw,2.5rem)", { lineHeight: "1.2" }],
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "767px",
        lg: "991px",
        xl: "1199px",
        mxl: "1440px",
        xlg: "1919px",
      },
      colors: {
        backgroundColor: "#161616",
        globalBorderColor: "#262626",
        greyColor: "#C0C0C0",
        blackColor: "#000000",
        primaryColor: "#E63E21",
        ctaBorderColor: "#1B1B1B",
        activeColr: "#F35034",
      },
    },
  },
  plugins: [],
} satisfies Config;

// src/fonts.ts
import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const cabinet = localFont({
  src: [
    {
      path: "../../assets/CabinetGrotesk-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../assets/CabinetGrotesk-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../assets/CabinetGrotesk-Light.woff2",
      weight: "300",
      style: "normal",
    },

    {
      path: "../../assets/CabinetGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/CabinetGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

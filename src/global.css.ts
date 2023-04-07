import { style, globalStyle, createTheme, globalFontFace } from "@vanilla-extract/css";

import QuicksandFontUrl from "./fonts/Quicksand-Regular.woff2";

globalFontFace("Quicksand", {
  src: `url('${QuicksandFontUrl}') format('woff2')`,
});

globalStyle("body", {
  margin: 0,
  height: "100vh",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  fontFamily: "Quicksand, sans-serif",
});

globalStyle("a", {
  color: "#fff",
  fontFamily: "Quicksand, sans-serif",
});

export const [themeClass, vars] = createTheme({
  colors: {
    primary: "#F5DE8D",
    secondary: "#A0AAFF",
    white: "#FFFFFF",
    background: "rgba(30, 31, 32, 0.51)",
    hint: "#8B8B8B",
  },
  fonts: {
    hint: "16px",
    hintMobile: "13px",
    label: "20px",
    labelMobile: "16px",
    title: "48px",
    titleMobile: "24px",
  },
  gaps: {
    small: "8px",
    medium: "12px",
    large: "24px",
  },
});

const container = style([
  themeClass,
  {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    overflow: "hidden",
    height: "100vh",
    fontSize: 16,
    color: "#ffffff",
    "@media": {
      "(max-width: 768px)": {
        fontSize: 13,
      },
    },
  },
]);

const viewsScrollContainer = style({
  overflow: "hidden",
});

const viewsContainer = style({
  background: `
    125% 60% url('/images/sphere-main.png'),
    75% 97% url('/images/sphere-main.png'),
    linear-gradient(174.86deg, #843CCC 0%, #412396 17.27%, #651EAB 33.85%, #361784 58.33%, #372A56 76.51%, #252525 100%)
  `,
  backgroundBlendMode: "luminosity",
  backgroundRepeat: "no-repeat",
  "@media": {
    "(max-width: 768px)": {
      background: `
        100% 60% / 100% url('/images/sphere-main.png'),
        100% 95% / 100% url('/images/sphere-main.png'),
        linear-gradient(
          174.86deg, 
          #843CCC 0%, 
          #412396 17.27%, 
          #651EAB 33.85%, 
          #361784 58.33%, 
          #372A56 76.51%, 
          #252525 100%
        )
      `,
      backgroundRepeat: "no-repeat",
    },
  },
});

export const styles = { container, viewsScrollContainer, viewsContainer };

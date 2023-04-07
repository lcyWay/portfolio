import { keyframes, style } from "@vanilla-extract/css";

import { vars } from "global.css";

const contentAnimation = keyframes({
  from: {
    opacity: 0,
    paddingTop: 100,
  },
  to: {
    opacity: 1,
    paddingTop: 0,
  },
});

const container = style({
  width: "100vw",
  height: "100vh",
  display: "flex",
  position: "relative",
});

const headerContainer = style({
  position: "absolute",
  display: "flex",
  top: 0,
  bottom: 0,
  left: vars.gaps.small,
  right: 0,
});

const headerContent = style({
  maxWidth: 1200,
  flex: 1,
  margin: "auto",
  fontSize: vars.fonts.title,
  fontWeight: 600,
  zIndex: 3,
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fonts.titleMobile,
    },
  },
});

const headerContentAnimation = style([
  headerContent,
  {
    animation: `${contentAnimation} 0.9s ease-out`,
  },
]);

const highlighted = style({
  color: vars.colors.primary,
});

const sphereRedImage = style({
  position: "absolute",
  top: "10%",
  left: "22%",
  "@media": {
    "(max-width: 768px)": {
      top: "10%",
      left: "5%",
      width: "120px",
    },
  },
});

const sphereYellowImage = style({
  position: "absolute",
  top: "18%",
  left: "29%",
  "@media": {
    "(max-width: 768px)": {
      top: "18%",
      left: "20%",
      width: "100px",
    },
  },
});

const sphereMainImage = style({
  position: "absolute",
  left: "62%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  "@media": {
    "(max-width: 768px)": {
      left: "90%",
      top: "50%",
      width: "100%",
    },
  },
});

export const styles = {
  container,
  headerContainer,
  headerContent,
  headerContentAnimation,
  highlighted,
  sphereMainImage,
  sphereRedImage,
  sphereYellowImage,
};

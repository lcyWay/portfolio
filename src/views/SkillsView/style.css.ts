import { keyframes, style } from "@vanilla-extract/css";

import { vars } from "global.css";

const skillsAnimation = keyframes({
  from: {
    paddingTop: 100,
    opacity: 0,
  },
  to: {
    paddingTop: 0,
    opacity: 1,
  },
});

const container = style({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  position: "relative",
});

const content = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: vars.gaps.large,
  zIndex: 3,
  "@media": {
    "(max-width: 1024px)": {
      gap: vars.gaps.medium,
      padding: `0 ${vars.gaps.medium}`,
    },
  },
});

const contentAnimation = style([
  content,
  {
    transition: "all .15s ease-in-out",
    animation: `${skillsAnimation} 0.5s ease-out`,
  },
]);

const title = style({
  color: vars.colors.primary,
  fontSize: vars.fonts.title,
  fontWeight: 600,
  "@media": {
    "(max-width: 1024px)": {
      fontSize: vars.fonts.titleMobile,
    },
  },
});

const description = style({
  textAlign: "center",
});

const highlighted = style({
  color: vars.colors.primary,
});

const skillsContainer = style({
  display: "flex",
  flexWrap: "wrap",
  maxWidth: 600,
  justifyContent: "center",
  gap: `${vars.gaps.large} ${vars.gaps.medium}`,
});

const skillBlock = style({
  display: "flex",
  gap: vars.gaps.small,
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});
const skillImage = style({
  height: 64,
  "@media": {
    "(max-width: 1024px)": {
      height: 32,
    },
    "(max-width: 425px)": {
      height: 24,
    },
  },
});

const yellowSphere = style({
  position: "absolute",
  left: "20%",
  top: "15%",
  "@media": {
    "(max-width: 1024px)": {
      width: 100,
      left: "5%",
      top: "10%",
    },
  },
});
const purpleSphere = style({
  position: "absolute",
  right: "20%",
  bottom: "10%",
  "@media": {
    "(max-width: 1024px)": {
      width: 100,
      right: "5%",
      bottom: "5%",
    },
  },
});

export const styles = {
  container,
  content,
  contentAnimation,
  highlighted,
  title,
  description,
  skillsContainer,
  skillBlock,
  skillImage,
  yellowSphere,
  purpleSphere,
};

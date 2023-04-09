import { globalStyle, style } from "@vanilla-extract/css";

import { vars } from "global.css";

const container = style({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: vars.gaps.large,
  position: "relative",
});

const blueSphere = style({
  position: "absolute",
  right: "25%",
  bottom: "5%",
  "@media": {
    "(max-width: 968px)": {
      width: 100,
      right: "5%",
    },
  },
});

globalStyle(`${container} #project-title`, {
  color: vars.colors.secondary,
});

globalStyle(`${container} #project-section span`, {
  color: vars.colors.secondary,
});

globalStyle(`${container} #project-section svg path`, {
  fill: vars.colors.secondary,
});

export const styles = {
  container,
  blueSphere,
};

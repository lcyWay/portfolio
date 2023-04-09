import { style } from "@vanilla-extract/css";

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

const yellowSphere = style({
  position: "absolute",
  left: "25%",
  top: "12%",
  "@media": {
    "(max-width: 768px)": {
      width: 100,
      left: "10%",
      top: "7%",
    },
  },
});

export const styles = {
  container,
  yellowSphere,
};

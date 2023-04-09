import { globalStyle, style } from "@vanilla-extract/css";

import { vars } from "global.css";

const button = style({
  fontSize: vars.fonts.hint,
  background: vars.colors.background,
  padding: "6px 8px 8px 8px",
  borderRadius: vars.gaps.small,
  cursor: "pointer",
});

globalStyle(`${button} a`, {
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "4px",
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fonts.hintMobile,
    },
  },
});

export const styles = { button };

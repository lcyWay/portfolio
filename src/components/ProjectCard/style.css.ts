import { keyframes, style } from "@vanilla-extract/css";

import { vars } from "global.css";

const shouldDoProjectAnimation = keyframes({
  from: {
    marginTop: 100,
    opacity: 0,
  },
  to: {
    marginTop: 0,
    opacity: 1,
  },
});

const content = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: vars.colors.background,
  borderRadius: vars.gaps.large,
  padding: 40,
  gap: vars.gaps.large,
  margin: `0 ${vars.gaps.small}`,
  maxWidth: 1000,
  zIndex: 3,
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      padding: `${vars.gaps.large} ${vars.gaps.medium}`,
      gap: vars.gaps.medium,
      maxHeight: "70vh",
      overflowY: "auto",
    },
  },
});

const contentAnimation = style([
  content,
  {
    transition: "all .15s ease-in-out",
    animation: `${shouldDoProjectAnimation} 0.5s ease-out`,
  },
]);

const leftSideContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.gaps.large,
  "@media": {
    "(max-width: 768px)": {
      gap: vars.gaps.small,
    },
  },
});

const title = style({
  color: vars.colors.primary,
  fontSize: vars.fonts.title,
  fontWeight: 600,
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fonts.titleMobile,
    },
  },
});

const highlighted = style({
  color: vars.colors.primary,
});

const textWithIcon = style({
  display: "flex",
  gap: 4,
  alignItems: "center",
});

const labelWithIcon = style([
  textWithIcon,
  highlighted,
  {
    fontSize: vars.fonts.label,
    fontWeight: 600,
    "@media": {
      "(max-width: 768px)": {
        fontSize: vars.fonts.labelMobile,
      },
    },
  },
]);

const smallSpaceContainer = style({
  display: "flex",
  gap: 4,
  flexDirection: "column",
});

const mediumSpaceContainer = style({
  display: "flex",
  gap: 8,
  flexDirection: "column",
});

const projectImage = style({
  "@media": {
    "(max-width: 768px)": {
      width: "70%",
    },
  },
});

export const styles = {
  content,
  contentAnimation,
  leftSideContainer,
  highlighted,
  title,
  textWithIcon,
  labelWithIcon,
  smallSpaceContainer,
  mediumSpaceContainer,
  projectImage,
};

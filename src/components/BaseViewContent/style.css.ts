import { globalStyle, keyframes, style } from "@vanilla-extract/css";

import { vars } from "global.css";

const headerContainerShowAnimation = keyframes({
  from: {
    opacity: 0,
    top: -82,
  },
  to: {
    top: 0,
    opacity: 1,
  },
});

const headerContainer = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 5,
  animation: `${headerContainerShowAnimation} 1s`,
  padding: `${vars.gaps.large} 0`,
  "@media": {
    "(max-width: 1024px)": {
      padding: `${vars.gaps.medium} ${vars.gaps.small}`,
    },
  },
});

const headerContent = style({
  display: "flex",
  maxWidth: 1200,
  margin: "0 auto",
  justifyContent: "space-between",
  padding: `0 ${vars.gaps.medium}`,
});

const headerTitleLogo = style({
  background: vars.colors.background,
  padding: "6px 12px 8px 12px",
  borderRadius: vars.gaps.small,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "4px",
  fontSize: vars.fonts.hint,
  fontWeight: 600,
  letterSpacing: 2.5,
  "@media": {
    "(max-width: 1024px)": {
      fontSize: vars.fonts.hintMobile,
    },
  },
});

const headerTitleContainer = style({
  display: "flex",
  alignItems: "center",
  gap: vars.gaps.medium,
  fontSize: vars.fonts.label,
  "@media": {
    "(max-width: 1024px)": {
      fontSize: vars.fonts.labelMobile,
    },
  },
});

const navContainer = style({
  display: "flex",
  alignItems: "center",
  gap: vars.gaps.large,
  "@media": {
    "(max-width: 1024px)": {
      display: "none",
    },
  },
});

const navItem = style({
  cursor: "pointer",
});

const infoContainerAnimation = keyframes({
  from: {
    opacity: 0,
    bottom: -82,
  },
  to: {
    bottom: 0,
    opacity: 1,
  },
});

const infoContainer = style({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 5,
  animation: `${infoContainerAnimation} 1s`,
  padding: `${vars.gaps.large} ${vars.gaps.medium}`,
  "@media": {
    "(max-width: 1024px)": {
      padding: `${vars.gaps.medium} ${vars.gaps.small}`,
    },
  },
});

const infoContent = style({
  display: "flex",
  maxWidth: 1200,
  margin: "0 auto",
  gap: vars.gaps.medium,
  "@media": {
    "(max-width: 1024px)": {
      gap: vars.gaps.small,
    },
  },
});

const paginationContainerAnimation = keyframes({
  from: {
    opacity: 0,
    right: -82,
  },
  to: {
    right: 0,
    opacity: 1,
  },
});

const paginationContainer = style({
  position: "fixed",
  bottom: 0,
  top: 0,
  right: 0,
  zIndex: 5,
  padding: vars.gaps.large,
  animation: `${paginationContainerAnimation} 1s`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  "@media": {
    "(max-width: 1024px)": {
      display: "none",
    },
  },
});

const paginationContent = style({
  display: "flex",
  position: "relative",
});

const paginationItem = style({
  padding: vars.gaps.medium,
  cursor: "pointer",
});

const paginationBorder = style({
  display: "flex",
  width: 1,
  background: vars.colors.hint,
});

const paginationSelected = style({
  position: "absolute",
  right: 0,
  height: 44,
  width: 2,
  background: vars.colors.white,
  transition: "top 0.25s ease-in-out",
});

const paginationScrollDownContainer = style({
  display: "flex",
  alignItems: "center",
  gap: 4,
  width: 20,
  height: 20,
  transform: "rotate(-90deg)",
  cursor: "pointer",
  whiteSpace: "nowrap",
  color: vars.colors.hint,
  transition: "color .15s ease-in-out",
  ":hover": {
    color: vars.colors.white,
  },
});

globalStyle(`${paginationScrollDownContainer} > svg`, {
  minWidth: 24,
  minHeight: 24,
});

globalStyle(`${paginationScrollDownContainer} > svg #stroke`, {
  stroke: vars.colors.hint,
  transition: "stroke .15s ease-in-out",
});

globalStyle(`${paginationScrollDownContainer}:hover > svg #stroke`, {
  stroke: vars.colors.white,
});

const hideOnMobile = style({
  display: "flex",
  "@media": {
    "(max-width: 1024px)": {
      display: "none",
    },
  },
});

export const styles = {
  headerContainer,
  headerContent,
  headerTitleContainer,
  headerTitleLogo,
  hideOnMobile,
  navContainer,
  navItem,
  infoContainer,
  infoContent,
  paginationContent,
  paginationContainer,
  paginationItem,
  paginationSelected,
  paginationBorder,
  paginationScrollDownContainer,
};

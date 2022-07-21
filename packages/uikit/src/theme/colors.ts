import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#1F75EB",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#452a7a",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#1F75EB",
  background: "#0F172A",
  backgroundDisabled: "#4B5D67",
  backgroundAlt: "#07031A",
  backgroundAlt2: "#",
  cardBorder: "rgba(0, 0, 0, 0)",
  contrast: "#FFFFFF",
  dropdown: "#",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#0F172A",
  inputSecondary: "#262130",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#F4EEFF",
  textDisabled: "#E1E8EB",
  textSubtle: "#B8ADD2",
  disabled: "#524B63",
  gradients: {
    bubblegum: "#",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "#07031A",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#1F75EB",
  background: "#16213E",
  backgroundDisabled: "#4B5D67",
  backgroundAlt: "#07031A", //
  backgroundAlt2: "#",
  cardBorder: "#383241",
  contrast: "#FFFFFF",
  dropdown: "#",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#0F172A",
  inputSecondary: "#07031A", //
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#F4EEFF",
  textDisabled: "#E1E8EB",
  textSubtle: "#B8ADD2",
  disabled: "#524B63",
  gradients: {
    bubblegum: "#0F172A", //
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "07031A",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

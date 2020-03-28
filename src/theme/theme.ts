export type ColorScheme = {
  primary: string;
  secondary: string;
  tertiary: string;
  hint: string;
  danger: string;
  background: string;
  black: "black";
  white: "white";
  blue: string;
};

export const LIGHT: ColorScheme = {
  primary: "black",
  secondary: "gray",
  tertiary: "lightgray",
  hint: "whitesmoke",
  danger: "red",
  background: "white",
  black: "black",
  white: "white",
  blue: "blue"
};

export const DARK: ColorScheme = {
  primary: "white",
  secondary: "gray",
  tertiary: "dimgray",
  hint: "#333",
  danger: "red",
  background: "black",
  black: "black",
  white: "white",
  blue: "dodgerblue"
};

export const SCHEMES = {
  dark: DARK,
  light: LIGHT
};

export type Scheme = keyof typeof SCHEMES;

export const THEME = {
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
    mono: "Menlo, Monaco, Consolas, 'Courier New', monospace"
  },
  colors: LIGHT,
  fontSizes: [
    "0.75rem", // 0 = 12px
    "0.875rem", // 1 = 14px
    "1rem", // 2 = 16px (base)
    "1.125rem", // 3 = 18px
    "1.5rem", // 4 = 24px
    "2rem", // 5 = 32px
    "3rem", // 6 = 48px
    "4rem", // 7 = 64px
    "4.5rem" // 8 = 72px
  ],
  lineHeights: [1, 1.25, 1.33, 1.75],
  space: [
    "0", // 0
    "0.125rem", // 1
    "0.25rem", // 2
    "0.5rem", // 3
    "0.75rem", // 4
    "1rem", // 5
    "1.5rem", // 6
    "2rem", // 7
    "4rem", // 8
    "8rem", // 9
    "16rem" // 10
  ],
  breakpoints: ["20rem", "50rem", "64rem"]
};

export type Theme = typeof THEME;

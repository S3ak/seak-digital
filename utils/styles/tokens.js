import DesignSystem from "design-system-utils";

import basePalette from "./baseColourPalette";

const fontFamily = {
  system:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
  sans: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  serif: 'Georgia, "Times New Roman", Times, serif',
  mono: 'Menlo, Monaco, "Courier New", monospace',
};

const transitions = {
  duration: "300ms",
  timing: "cubic-bezier(0.77, 0, 0.175, 1)",
};

const colorPalette = basePalette;

export const baseTheme = {
  type: {
    baseFontSize: "14px",

    sizes: {
      xs: "16px",
      s: "20px",
      base: "30px",
      m: "36px",
      l: "42px",
      xl: "50px",
      xxl: "58px",
    },

    fontFamily,
    fontFamilyBase: fontFamily.system,
    fontFamilyHeadings: fontFamily.mono,

    lineHeight: {
      headings: 1.1,
    },

    fontWeight: {
      normal: 300, // Useful to set here if using anything other than `normal`
      bold: "bold", // Useful to set here when bold webfonts come as 400 font-weight.
      headings: "bold", // instead of browser default, bold
    },
  },

  colors: {
    colorPalette,

    brand: {
      red: "#e82219",
      deeporange: "#ff7200",
      orange: "#ff9500",
      green: "#c4d000",
      teal: "#1aa5c8",
      navy: "#0052da",
    },
  },

  breakpoints: {
    s: 320,
    m: 768,
    l: 992,
    xl: 1200,
  },

  zIndex: {
    low: 10,
    mid: 100,
    high: 1000,
  },

  spacing: {
    baseline: 20,
    padding: "0.3em",
    scale: [0, 8, 16, 24, 32, 40],
  },

  layout: {
    gutter: 20,
    maxWidth: 1200,
    grid: {
      columnCount: 12,
    },
  },

  transition: {
    default: {
      duration: transitions.duration,
      timing: transitions.timing,
      transition: `all ${transitions.duration} ${transitions.timing}`,
    },
  },

  borderRadius: "0.3em",
};

export default new DesignSystem(designTokens, {
  fontSizeUnit: "rem",
});

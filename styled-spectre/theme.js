import { lighten, darken } from "polished";

// Core features
const rtl = false;
// Core colors
const core = {
  primary: "#673ab7",
  get primaryDark() {
    return darken(3 / 100, this.primary);
  },
  get primaryLight() {
    return lighten(3 / 100, this.primary);
  },
  get secondary() {
    return lighten(37.5 / 100, this.primary);
  },
  get secondaryDark() {
    return darken(3 / 100, this.secondary);
  },
  get secondaryLight() {
    return lighten(3 / 100, this.secondary);
  }
};
// Gray colors
const gray = {
  dark: "#303742",
  light: "#fff",
  get gray() {
    return lighten(55 / 100, this.dark);
  },
  get grayDark() {
    return darken(30 / 100, this.gray);
  },
  get grayLight() {
    return lighten(20 / 100, this.gray);
  },
  get border() {
    return lighten(65 / 100, this.dark);
  },
  get borderDark() {
    return darken(10 / 100, this.border);
  },
  get borderLight() {
    return lighten(8 / 100, this.border);
  },
  get bg() {
    return lighten(75 / 100, this.dark);
  },
  get bgDark() {
    return darken(3 / 100, this.bg);
  },
  get bgLight() {
    return this.light;
  }
};
// Control colors
const control = {
  success: "#32b643",
  warning: "#ffb700",
  error: "#e85600"
};
// Other colors
const other = {
  code: "#d73e48",
  highlight: "#ffe9b3",
  bodyBg: `${gray.bgLight}`,
  get bodyFont() {
    return lighten(5 / 100, gray.dark);
  },
  link: `${core.primary}`,
  get linkDark() {
    return darken(10 / 100, this.link);
  },
  get linkLight() {
    return lighten(10 / 100, this.link);
  }
};
//  colors
export const colors = {
  ...core,
  ...gray,
  ...control,
  ...other,
  transition: "transition: all .2s ease",
  shadow: "0 0 0 .1rem rgba($color, .2)"
};
// Fonts
const fonts = {
  base: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
  mono: '"SF Mono", "Segoe UI Mono", "Roboto Mono", Menlo, Courier, monospace',
  fallBack: '"Helvetica Neue", sans-serif',
  get body() {
    return `${this.base}, ${this.fallBack}`;
  },
  get cjkZhHans() {
    return `${this.base}, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", ${this.fallBack} `;
  },
  get cjkZhHant() {
    return `${this.base}, "PingFang TC", "Hiragino Sans CNS", "Microsoft JhengHei", ${this.fallBack} `;
  },
  get cjkJp() {
    return `${this.base}, "Hiragino Sans", "Hiragino Kaku Gothic Pro", "Yu Gothic", YuGothic, Meiryo, ${this.fallBack}`;
  },
  get cjkKo() {
    return `${this.base} , "Malgun Gothic", ${this.fallBack}`;
  }
};
// Unit sizes
const units = {
  o: 0.05,
  h: 0.1,
  1: 0.2,
  2: 0.4,
  3: 0.6,
  4: 0.8,
  5: 1,
  6: 1.2,
  7: 1.4,
  8: 1.6,
  9: 1.8,
  10: 2,
  12: 2.4,
  16: 3.2
};
const unitRem = {};
for (const property in units) {
  unitRem[property] = units[property] + "rem";
}
// Font sizes
const fontSizes = {
  fontHtml: "20px",
  lineHeightHtml: "1.5",
  font: ".8rem",
  fontSm: ".7rem",
  fontLg: ".9rem",
  lineHeight: "1rem"
};
// Sizes
const sizes = {
  layoutSpacing: units[2],
  layoutSpacingSm: units[1],
  layoutSpacingLg: units[4],
  borderRadius: units["h"],
  borderWidth: units["o"],
  borderWidthLg: units["h"],
  controlSize: units[9],
  controlSizeSm: units[7],
  controlSizeLg: units[10],
  controlPaddingX: units[2],
  controlPaddingXSm: units[2] * 0.75,
  controlPaddingXLg: units[2] * 1.5,
  get controlPaddingY() {
    return (this.controlSize - fontSizes.lineHeight.slice(0, -3)) / 2 - this.borderWidth;
  },
  get controlPaddingYSm() {
    return (this.controlSizeSm - fontSizes.lineHeight.slice(0, -3)) / 2 - this.borderWidth;
  },
  get controlPaddingYLg() {
    return (this.controlSizelg - fontSizes.lineHeight.slice(0, -3)) / 2 - this.borderWidth;
  }
};
const sizesRem = {};
for (const property in sizes) {
  sizesRem[property] = sizes[property] + "rem";
}

// Z-index
const zIndexAliases = ["0", "1", "2", "3", "4"];
const zIndex = [1, 100, 200, 300, 400];

// Breakpoints
const breakpointsAliases = ["xs", "sm", "md", "lg", "xl", "2x"];
export const breakpoints = [480, 600, 840, 960, 1280, 1440];

//Controls
const controlsWidthAliases = ["xs", "sm", "md", "lg", "xl"];
export const controlsWidth = [180, 320, 640, 960, 1280];

const theme = {
  colors,
  fonts,
  sizes: {
    units: { ...unitRem },
    fonts: { ...fontSizes },
    ...sizesRem,
    controlIcon: "0.8rem",
    controlWidthXs: "180px",
    controlWidthSm: "320px",
    controlWidthMd: "640px",
    controlWidthLg: "960px",
    controlWidthXl: "1280px"
  },
  zIndex
};

export default theme;

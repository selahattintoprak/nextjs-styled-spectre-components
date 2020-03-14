import { css } from "styled-components";
import { darken, rgba } from "polished";
import theme from "../theme";

export const controlShadow = (color = theme.colors.primary) =>
  css`
    box-shadow: 0 0 0 0.1rem ${rgba(color, 0.2)};
  `;
export const shadowVariant = offset => css`
  box-shadow: 0 ${offset} ${(offset + 0.05) * 2 + "rem"} ${rgba(theme.colors.dark, 0.3)};
`;
console.log("shadowVariant", shadowVariant);

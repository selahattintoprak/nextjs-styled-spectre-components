import { css } from "styled-components";
import { rotate } from "../animations";
export const loading = ({ theme, withLoading }) => css`
  color: transparent;
  min-height: ${theme.sizes.units[4]};
  pointer-events: none;
  position: relative;
  &::after {
    animation: ${rotate} 500ms infinite linear;
    border: ${theme.sizes.borderWidthLg} solid ${theme.colors.primary};
    border-radius: 50%;
    border-right-color: transparent;
    border-top-color: transparent;
    content: "";
    display: block;
    height: ${theme.sizes.units[4]};
    left: 50%;
    margin-left: -${theme.sizes.units[2]};
    margin-top: -${theme.sizes.units[2]};
    position: absolute;
    top: 50%;
    width: ${theme.sizes.units[4]};
    z-index: ${theme.sizes.zIndex[0]};
  }

  ${withLoading == "lg" &&
    css`
      min-height: ${theme.sizes.units[10]};
      &::after {
        height: ${theme.sizes.units[8]};
        margin-left: -${theme.sizes.units[4]};
        margin-top: -${theme.sizes.units[4]};
        width: ${theme.sizes.units[8]};
      }
    `}
`;

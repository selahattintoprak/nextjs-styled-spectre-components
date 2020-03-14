import { css } from "styled-components";
import { darken, lighten } from "polished";
import theme from "../theme";
import { controlShadow } from "./shadow";

export const buttonVariant = (color = theme.colors.primary) => css`
  background: ${color};
  border-color: ${darken(3/100, color)};
  color: ${theme.colors.light};
  &:focus {
    ${controlShadow(color)}
  }
  &:focus,
  &:hover {
    background: ${darken(2/100, color)};
    border-color: ${darken(5/100, color)};
    color: ${theme.colors.light};
  }
  &:active,
  &.active {
    background: ${darken(7/100, color)};
    border-color: ${darken(10/100, color)};
    color: ${theme.colors.light};
  }
  &.loading {
    &::after {
      border-bottom-color: ${theme.colors.light};
      border-left-color: ${theme.colors.light};
    }
  }
`;
export const buttonOutlineVariant = (color = theme.colors.primary) => css`
  background: ${theme.colors.light};
  border-color: ${color};
  color: ${color};
  &:focus {
    ${controlShadow(color)}
  }
  &:focus,
  &:hover {
    background: ${lighten(50/100, color)};
    border-color: ${darken(2/100, color)};
    color: ${color};
  }
  &:active,
  &.active {
    background: ${color};
    border-color: ${darken(5/100, color)};
    color: ${theme.colors.light};
  }
  &.loading {
    &::after {
      border-bottom-color: ${color};
      border-left-color: ${color};
    }
  }
`;

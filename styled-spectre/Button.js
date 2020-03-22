import styled, { css } from "styled-components";
import theme2 from "./theme";
import { darken, rgba } from "polished";
import { buttonVariant } from "./mixins/button";
import { controlShadow } from "./mixins/shadow";
import { loading } from "./utilities/loading";
const buttonBase = ({ theme, withLoading }) => css`
  appearance: none;
  background: ${theme.colors.light};
  border: ${theme.sizes.borderWidth} solid ${theme.colors.primary};
  border-radius: ${theme.sizes.borderRadius};
  color: ${theme.colors.primary};
  cursor: pointer;
  display: inline-block;
  font-size: ${theme.sizes.fonts.font};
  height: ${theme.sizes.controlSize};
  line-height: ${theme.sizes.fonts.lineHeight};
  outline: none;
  padding: ${theme.sizes.controlPaddingY} ${theme.sizes.controlPaddingX};
  text-align: center;
  text-decoration: none;
  transition: background 0.2s, border 0.2s, box-shadow 0.2s, color 0.2s;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  &:focus {
    ${controlShadow()}
  }
  &:focus,
  &:hover {
    background: ${theme.colors.secondary};
    border-color: ${theme.colors.primaryDark};
    text-decoration: none;
  }
  &:active,
  &.active {
    background: ${theme.colors.primaryDark};
    border-color: ${darken(5 / 100, theme.colors.primaryDark)};
    color: ${theme.colors.light};
    text-decoration: none;
    ${withLoading &&
      css`
        &::after {
          border-bottom-color: ${theme.colors.light};
          border-left-color: ${theme.colors.light};
        }
      `}
  }
  &[disabled],
  &:disabled,
  &.disabled {
    cursor: default;
    opacity: 0.5;
    pointer-events: none;
  }
  ${withLoading && loading({ theme, withLoading })}
`;
const buttonPrimary = ({ theme, withLoading }) => css`
  background: ${theme.colors.primary};
  border-color: ${theme.colors.primaryDark};
  color: ${theme.colors.light};
  &:focus,
  &:hover {
    background: ${darken(2 / 100, theme.colors.primaryDark)};
    border-color: ${darken(5 / 100, theme.colors.primaryDark)};
    color: ${theme.colors.light};
  }
  &:active,
  &.active {
    background: ${darken(4 / 100, theme.colors.primaryDark)};
    border-color: ${darken(7 / 100, theme.colors.primaryDark)};
    color: ${theme.colors.light};
  }
  ${withLoading && loading({ theme, withLoading })}
  ${withLoading &&
    css`
      &::after {
        border-bottom-color: ${theme.colors.light};
        border-left-color: ${theme.colors.light};
      }
    `}
`;
const buttonSuccess = ({ theme }) => css`
  ${buttonVariant(theme.colors.success)}
`;
const buttonError = ({ theme }) => css`
  ${buttonVariant(theme.colors.error)};
`;
const buttonLink = ({ theme }) => css`
  background: transparent;
  border-color: transparent;
  color: ${theme.colors.link};
  &:focus,
  &:hover,
  &:active,
  &.active {
    background: transparent;
    border-color: transparent;
    color: ${theme.colors.linkDark};
  }
`;
const buttonSm = ({ theme }) => css`
  font-size: ${theme.sizes.fonts.fontSm};
  height: ${theme.sizes.controlSizeSm};
  padding: ${theme.sizes.controlPaddingYSm} ${theme.sizes.controlPaddingXSm};
`;
const buttonLg = ({ theme }) => css`
  font-size: ${theme.sizes.fonts.fontLg};
  height: ${theme.sizes.controlSizeLg};
  padding: ${theme.sizes.controlPaddingYLg} ${theme.sizes.controlPaddingXLg};
`;
const buttonBlock = css`
  display: block;
  width: 100%;
`;
const buttonIcon = ({ theme, sm, lg }) => css`
  width: ${theme.sizes.controlSize};
  padding-left: 0;
  padding-right: 0;

  /* Size Small */
  ${sm &&
    css`
      width: ${theme.sizes.controlSizeSm};
    `}

  /* Size Large */
  ${lg &&
    css`
      width: ${theme.sizes.controlSizeLg};
    `}
`;
const buttonClear = ({ theme }) => css`
  background: transparent;
  border: 0;
  color: currentColor;
  height: ${theme.sizes.units[5]};
  line-height: ${theme.sizes.units[4]};
  margin-left: ${theme.sizes.units[1]};
  margin-right: -2px;
  opacity: 1;
  padding: ${theme.sizes.units["h"]};
  text-decoration: none;
  width: ${theme.sizes.units[5]};

  &:focus,
  &:hover {
    background: ${rgba(theme.colors.bg, 0.5)};
    opacity: 0.95;
  }

  &::before {
    content: "\2715";
  }
`;
const Button = styled.button`
  ${({
    primary,
    success,
    error,
    link,
    sm,
    lg,
    block,
    icon,
    clear,
    ...rest
  }) => css`
  /* Button Base */
  ${buttonBase(rest)}

  /* Button Primary */
  ${primary && buttonPrimary(rest)}

  /* Button Success */
   ${success && buttonSuccess(rest)}
   
  /* Button Error */
  ${error && buttonError(rest)}

  /* Button Link */
  ${link && buttonLink(rest)}

  /* Button Sizes */
  ${sm && buttonSm(rest)}
  ${lg && buttonLg(rest)}

  /* Button Block */
  ${block && buttonBlock}

  /* Button Icon */
  ${icon && buttonIcon({ sm, lg, ...rest })}

  /* Button Clear */
  ${clear && buttonClear(rest)}
  `}
`;

export const ButtonGroup = styled.div`
  display: inline-flex;
  flex-wrap: wrap;

  button {
    flex: 1 0 auto;
    &:first-child:not(:last-child) {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
      margin-left: -$border-width;
    }
    &:last-child:not(:first-child) {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      margin-left: -$border-width;
    }
    &:focus,
    &:hover,
    &:active,
    &.active {
      z-index: $zindex-0;
    }
  }

  ${({ block }) =>
    block &&
    css`
      display: flex;

      button {
        flex: 1 0 0;
      }
    `}
`;

export default Button;

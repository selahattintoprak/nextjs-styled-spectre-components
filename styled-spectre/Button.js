import styled, { css } from "styled-components";
import theme2 from "./theme";
import { darken, rgba } from "polished";
import { buttonVariant } from "./mixins/button";
import { controlShadow } from "./mixins/shadow";

const buttonBase = css`
  appearance: none;
  background: ${({ theme }) => theme.colors.light};
  border: ${({ theme }) => theme.sizes.borderWidth} solid
    ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  display: inline-block;
  font-size: ${({ theme }) => theme.sizes.fonts.font};
  height: ${({ theme }) => theme.sizes.controlSize};
  line-height: ${({ theme }) => theme.sizes.fonts.lineHeight};
  outline: none;
  padding: ${({ theme }) => theme.sizes.controlPaddingY};
  ${({ theme }) => theme.sizes.controlPaddingX};
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
    background: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
  }
  &:active,
  &.active {
    background: ${({ theme }) => theme.colors.primaryDark};
    border-color: ${({ theme }) => darken(5 / 100, theme.colors.primaryDark)};
    color: ${({ theme }) => theme.colors.light};
    text-decoration: none;
    ${({ loading }) =>
      loading &&
      css`
        &::after {
          border-bottom-color: ${({ theme }) => theme.colors.light};
          border-left-color: ${({ theme }) => theme.colors.light};
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
`;
const buttonPrimary = css`
  background: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.light};
  &:focus,
  &:hover {
    background: ${({ theme }) => darken(2 / 100, theme.colors.primaryDark)};
    border-color: ${({ theme }) => darken(5 / 100, theme.colors.primaryDark)};
    color: ${({ theme }) => theme.colors.light};
  }
  &:active,
  &.active {
    background: ${({ theme }) => darken(4 / 100, theme.colors.primaryDark)};
    border-color: ${({ theme }) => darken(7 / 100, theme.colors.primaryDark)};
    color: ${({ theme }) => theme.colors.light};
  }
  ${({ loading }) =>
    loading &&
    css`
      &::after {
        border-bottom-color: ${({ theme }) => theme.colors.light};
        border-left-color: ${({ theme }) => theme.colors.light};
      }
    `}
`;
const buttonSuccess = css`
  ${({ theme }) => buttonVariant(theme.colors.success)}
`;
const buttonError = css`
  ${({ theme }) => buttonVariant(theme.colors.error)};
`;
const buttonLink = css`
  background: transparent;
  border-color: transparent;
  color: ${({ theme }) => theme.colors.link};
  &:focus,
  &:hover,
  &:active,
  &.active {
    color: ${({ theme }) => theme.colors.linkDark};
  }
`;
const buttonSm = css`
  font-size: ${({ theme }) => theme.sizes.fonts.fontSm};
  height: ${({ theme }) => theme.sizes.controlSizeSm};
  padding: ${({ theme }) => theme.sizes.controlPaddingYSm};
  ${({ theme }) => theme.sizes.controlPaddingXSm};
`;
const buttonLg = css`
  font-size: ${({ theme }) => theme.sizes.fonts.fontLg};
  height: ${({ theme }) => theme.sizes.controlSizeLg};
  padding: ${({ theme }) => theme.sizes.controlPaddingYLg};
  ${({ theme }) => theme.sizes.controlPaddingXLg};
`;
const buttonBlock = css`
  display: block;
  width: 100%;
`;
const buttonAction = css`
  width: ${({ theme }) => theme.sizes.controlSize};
  padding-left: 0;
  padding-right: 0;

  /* Size Small */
  ${({ sm }) =>
    sm &&
    css`
      width: ${({ theme }) => theme.sizes.controlSizeSm};
    `}

  /* Size Large */
  ${({ lg }) =>
    lg &&
    css`
      width: ${({ theme }) => theme.sizes.controlSizeLg};
    `}
`;
const buttonClear = css`
  background: transparent;
  border: 0;
  color: currentColor;
  height: ${({ theme }) => theme.sizes.units[5]};
  line-height: ${({ theme }) => theme.sizes.units[4]};
  margin-left: ${({ theme }) => theme.sizes.units[1]};
  margin-right: -2px;
  opacity: 1;
  padding: ${({ theme }) => theme.sizes.units["h"]};
  text-decoration: none;
  width: ${({ theme }) => theme.sizes.units[5]};

  &:focus,
  &:hover {
    background: ${({ theme }) => rgba(theme.colors.bg, 0.5)};
    opacity: 0.95;
  }

  &::before {
    content: "\2715";
  }
`;
const Button = styled.button`
  /* Button Primary */
  ${buttonBase}

  /* Button Primary */
  ${({ primary }) => primary && buttonPrimary}

  /* Button Success */
  ${({ success }) => success && buttonSuccess}

  /* Button Error */
  ${({ error }) => error && buttonError}

  /* Button Link */
  ${({ link }) => link && buttonLink}

  /* Button Sizes */
  ${({ sm }) => sm && buttonSm}
  ${({ lg }) => lg && buttonLg}

  /* Button Block */
  ${({ block }) => block && buttonBlock}

  /* Button Action */
  ${({ action }) => action && buttonAction}

  /* Button Clear */
  ${({ clear }) => clear && buttonClear}

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

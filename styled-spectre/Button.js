import styled from "styled-components";
import theme2 from "./theme";
import { darken, rgba } from "polished";
import { buttonVariant } from "./mixins/button";
import { controlShadow } from "./mixins/shadow";

const Button = styled.button`
  appearance: none;
  background: ${({ theme }) => theme.colors.light};
  border: ${({ theme }) => theme.sizes.borderWidth} solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  display: inline-block;
  font-size: ${({ theme }) => theme.sizes.fonts.font};
  height: ${({ theme }) => theme.sizes.controlSize};
  line-height: ${({ theme }) => theme.sizes.fonts.lineHeight};
  outline: none;
  padding: ${({ theme }) => theme.sizes.controlPaddingY} ${({ theme }) => theme.sizes.controlPaddingY};
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
    border-color: ${({ theme }) => darken(0.5, theme.colors.primaryDark)};
    color: ${({ theme }) => theme.colors.light};
    text-decoration: none;
    &.loading {
      &::after {
        border-bottom-color: ${({ theme }) => theme.colors.light};
        border-left-color: ${({ theme }) => theme.colors.light};
      }
    }
  }
  &[disabled],
  &:disabled,
  &.disabled {
    cursor: default;
    opacity: 0.5;
    pointer-events: none;
  }

  // Button Primary
  &.btn-primary {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.light};
    &:focus,
    &:hover {
      background: ${({ theme }) => darken(0.2, theme.colors.primaryDark)};
      border-color: ${({ theme }) => darken(0.5, theme.colors.primaryDark)};
      color: ${({ theme }) => theme.colors.light};
    }
    &:active,
    &.active {
      background: ${({ theme }) => darken(0.4, theme.colors.primaryDark)};
      border-color: ${({ theme }) => darken(0.7, theme.colors.primaryDark)};
      color: ${({ theme }) => theme.colors.light};
    }
    &.loading {
      &::after {
        border-bottom-color: ${({ theme }) => theme.colors.light};
        border-left-color: ${({ theme }) => theme.colors.light};
      }
    }
  }

  // Button Colors
  &.btn-success {
    ${({ theme }) => buttonVariant(theme.colors.success)}
  }

  &.btn-error {
    ${({ theme }) => buttonVariant(theme.colors.error)};
  }

  // Button Link
  &.btn-link {
    background: transparent;
    border-color: transparent;
    color: ${({ theme }) => theme.colors.link};
    &:focus,
    &:hover,
    &:active,
    &.active {
      color: ${({ theme }) => theme.colors.linkDark};
    }
  }

  // Button Sizes
  &.btn-sm {
    font-size: ${({ theme }) => theme.sizes.fonts.fontSm};
    height: ${({ theme }) => theme.sizes.controlSizeSm};
    padding: ${({ theme }) => theme.sizes.controlPaddingYSm} ${({ theme }) => theme.sizes.controlPaddingXSm};
  }

  &.btn-lg {
    font-size: ${({ theme }) => theme.sizes.fonts.fontLg};
    height: ${({ theme }) => theme.sizes.controlSizeLg};
    padding: ${({ theme }) => theme.sizes.controlPaddingYLg} ${({ theme }) => theme.sizes.controlPaddingXLg};
  }

  // Button Block
  &.btn-block {
    display: block;
    width: 100%;
  }

  // Button Action
  &.btn-action {
    width: ${({ theme }) => theme.sizes.controlSize};
    padding-left: 0;
    padding-right: 0;

    &.btn-sm {
      width: ${({ theme }) => theme.sizes.controlSizeSm};
    }

    &.btn-lg {
      width: ${({ theme }) => theme.sizes.controlSizeLg};
    }
  }

  // Button Clear
  &.btn-clear {
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
  }
`;
console.log(Button);

export default Button;

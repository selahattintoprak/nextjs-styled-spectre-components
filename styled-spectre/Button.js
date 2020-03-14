import styled from "styled-components";
import theme2 from "./theme";

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
  padding: $control-padding-y $control-padding-x;
  text-align: center;
  text-decoration: none;
  transition: background 0.2s, border 0.2s, box-shadow 0.2s, color 0.2s;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  &:focus {
    @include control-shadow();
  }
  &:focus,
  &:hover {
    background: $secondary-color;
    border-color: $primary-color-dark;
    text-decoration: none;
  }
  &:active,
  &.active {
    background: $primary-color-dark;
    border-color: darken($primary-color-dark, 5%);
    color: $light-color;
    text-decoration: none;
    &.loading {
      &::after {
        border-bottom-color: $light-color;
        border-left-color: $light-color;
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
    background: $primary-color;
    border-color: $primary-color-dark;
    color: $light-color;
    &:focus,
    &:hover {
      background: darken($primary-color-dark, 2%);
      border-color: darken($primary-color-dark, 5%);
      color: $light-color;
    }
    &:active,
    &.active {
      background: darken($primary-color-dark, 4%);
      border-color: darken($primary-color-dark, 7%);
      color: $light-color;
    }
    &.loading {
      &::after {
        border-bottom-color: $light-color;
        border-left-color: $light-color;
      }
    }
  }

  // Button Colors
  &.btn-success {
    @include button-variant($success-color);
  }

  &.btn-error {
    @include button-variant($error-color);
  }

  // Button Link
  &.btn-link {
    background: transparent;
    border-color: transparent;
    color: $link-color;
    &:focus,
    &:hover,
    &:active,
    &.active {
      color: $link-color-dark;
    }
  }

  // Button Sizes
  &.btn-sm {
    font-size: $font-size-sm;
    height: $control-size-sm;
    padding: $control-padding-y-sm $control-padding-x-sm;
  }

  &.btn-lg {
    font-size: $font-size-lg;
    height: $control-size-lg;
    padding: $control-padding-y-lg $control-padding-x-lg;
  }

  // Button Block
  &.btn-block {
    display: block;
    width: 100%;
  }

  // Button Action
  &.btn-action {
    width: $control-size;
    padding-left: 0;
    padding-right: 0;

    &.btn-sm {
      width: $control-size-sm;
    }

    &.btn-lg {
      width: $control-size-lg;
    }
  }

  // Button Clear
  &.btn-clear {
    background: transparent;
    border: 0;
    color: currentColor;
    height: $unit-5;
    line-height: $unit-4;
    margin-left: $unit-1;
    margin-right: -2px;
    opacity: 1;
    padding: $unit-h;
    text-decoration: none;
    width: $unit-5;

    &:focus,
    &:hover {
      background: rgba($bg-color, 0.5);
      opacity: 0.95;
    }

    &::before {
      content: "\2715";
    }
  }
`;
console.log(Button);

export default Button;

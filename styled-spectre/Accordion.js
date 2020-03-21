import styled, { css } from "styled-components";

export const AccordionHeader = styled.label`
  display: block;
  padding: ${({ theme }) => `${theme.sizes.units[1]} ${theme.sizes.units[2]}`};

  .icon {
    transition: transform 0.25s;
  }
`;
export const AccordionBody = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes.layoutSpacing};
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.25s;
`;
export default styled.div`
  input:checked ~,
  &[open] {
    & ${AccordionHeader} {
      .icon {
        transform: rotate(90deg);
      }
    }

    & ${AccordionBody} {
      max-height: 50rem;
    }
  }
`;
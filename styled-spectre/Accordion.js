import styled, { css } from "styled-components";
const accordionHeaderStyle = css`
  display: block;
  padding: ${({ theme }) => `${theme.sizes.units[1]} ${theme.sizes.units[2]}`};

  .icon {
    transition: transform 0.25s;
  }
`;
export const AccordionHeader = styled.label`
  ${accordionHeaderStyle}
`;
export const AccordionBody = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes.layoutSpacing};
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.25s;
`;
const accordionStyle = css`
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
const Accordion = styled.div`
  ${accordionStyle}
`;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export const Summary = styled.summary`
  ${accordionHeaderStyle}
  &::-webkit-details-marker {
    display: none;
  }
`;
export const Details = styled.details`
  ${accordionStyle}
`;
Details.Summary = Summary;

export default Accordion;

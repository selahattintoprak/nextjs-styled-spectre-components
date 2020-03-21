import Accordion from "../styled-spectre/Accordion";
import { IconsStyles, UtilitiesStyles } from "../ui-styles/styles";

export const config = { amp: "hybrid" };

export default () => (
  <>
    <style jsx global>
      {`
        button {
          margin: 5px;
        }
        div {
          margin: 16px;
        }
      `}
    </style>
    <div>
      <Accordion>
        <input
          type="checkbox"
          id="accordion-1"
          name="accordion-checkbox"
          hidden
        />
        <Accordion.AccordionHeader htmlFor="accordion-1">
          <i className="icon icon-arrow-right mr-1"></i>
          Title
        </Accordion.AccordionHeader>
        <Accordion.AccordionBody>Accordions content</Accordion.AccordionBody>
      </Accordion>
    </div>
    <IconsStyles />
    <UtilitiesStyles />
  </>
);

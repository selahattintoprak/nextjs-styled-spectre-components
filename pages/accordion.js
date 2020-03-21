import Accordions, {
  AccordionHeader,
  AccordionBody
} from "../styled-spectre/Accordion";
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
      <Accordions>
        <input
          type="checkbox"
          id="accordion-1"
          name="accordion-checkbox"
          hidden
        />
        <AccordionHeader htmlFor="accordion-1">
          <i class="icon icon-arrow-right mr-1"></i>
          Title
        </AccordionHeader>
        <AccordionBody>Accordions content</AccordionBody>
      </Accordions>
    </div>
    <IconsStyles />
    <UtilitiesStyles />
  </>
);

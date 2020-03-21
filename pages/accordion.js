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
        <Accordion.Header htmlFor="accordion-1">
          <i className="icon icon-arrow-right mr-1"></i>
          Title
        </Accordion.Header>
        <Accordion.Body>Accordions content</Accordion.Body>
      </Accordion>
    </div>
    <IconsStyles />
    <UtilitiesStyles />
  </>
);

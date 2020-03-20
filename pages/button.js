import Button, { ButtonGroup } from "../styled-spectre/Button";
import { IconsStyles, UtilitiesStyles } from "../ui-styles/styles";

export const config = { amp: "hybrid" };

export default () => (
  <>
    <style jsx global>
      {`
        button {
          margin: 5px !important;
        }
      `}
    </style>
    <Button clear>button clear</Button>
    <Button>default button</Button>
    <Button primary>primary button</Button>
    <Button link>link button</Button>
    <Button success>success button</Button>
    <Button error>error button</Button>
    <Button lg>large button</Button>
    <Button sm>small button</Button>
    <Button block>block button</Button>
    <Button primary lg>
      <i className="icon icon-arrow-left"></i> large
    </Button>
    <Button primary>
      <i className="icon icon-arrow-left"></i> normal
    </Button>
    <Button primary sm>
      <i className="icon icon-arrow-left"></i> small
    </Button>
    <Button action>
      <i className="icon icon-arrow-right"></i>
    </Button>
    <Button className="s-circle" action>
      <i className="icon icon-arrow-left"></i>
    </Button>
    <Button disabled tabIndex="-1">
      disabled button
    </Button>
    <Button className="loading" loading>
      button
    </Button>
    <Button primary className="loading" loading>
      primary button
    </Button>
    <ButtonGroup block>
      <Button>first button</Button>
      <Button>second button</Button>
      <Button>third button</Button>
    </ButtonGroup>
    <IconsStyles />
    <UtilitiesStyles />
  </>
);

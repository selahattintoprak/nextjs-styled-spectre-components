import Button, { ButtonGroup } from "../styled-spectre/Button";
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
      <div>
        <Button clear>X</Button>
      </div>
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
      <Button icon lg>
        <i className="icon icon-arrow-right"></i>
      </Button>
      <Button className="s-circle" icon sm>
        <i className="icon icon-arrow-left"></i>
      </Button>
      <Button disabled tabIndex="-1">
        disabled button
      </Button>
      <Button  withLoading="lg">
        button withLoading
      </Button>
      <Button primary withLoading>
        primary button
      </Button>
      <ButtonGroup block>
        <Button>first button</Button>
        <Button>second button</Button>
        <Button>third button</Button>
      </ButtonGroup>
    </div>
    <IconsStyles />
    <UtilitiesStyles />
  </>
);

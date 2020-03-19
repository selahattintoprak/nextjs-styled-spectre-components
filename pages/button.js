import Button from "../styled-spectre/Button";
import { IconsStyles, UtilitiesStyles } from "../ui-styles/styles";

export const config = { amp: "hybrid" };

export default () => (
  <>
    Hello World!
    <div style={{ margin: "10px" }}>
      <Button disabled>tests</Button>
    </div>
    <div style={{ margin: "10px" }}>
      <Button>tests</Button>
    </div>
    <div style={{ margin: "10px" }}>
      <Button className="btn btn-clear">button clear</Button>
    </div>
    <Title>My page</Title>
    <div>
      <Button className="btn">default button</Button>
      <Button className="btn btn-primary">primary button</Button>
      <Button className="btn btn-link">link button</Button>
      <Button className="btn btn-success">success button</Button>
      <Button className="btn btn-error">error button</Button>
      <Button className="btn btn-lg">large button</Button>
      <Button className="btn btn-sm">small button</Button>

      <Button className="btn btn-block">block button</Button>

      <Button className="btn btn-primary btn-lg">
        <i className="icon icon-arrow-left"></i> large
      </Button>
      <Button className="btn btn-primary">
        <i className="icon icon-arrow-left"></i> normal
      </Button>
      <Button className="btn btn-primary btn-sm">
        <i className="icon icon-arrow-left"></i> small
      </Button>
      <Button className="btn btn-action">
        <i className="icon icon-arrow-right"></i>
      </Button>
      <Button className="btn btn-action s-circle">
        <i className="icon icon-arrow-left"></i>
      </Button>
      <Button className="btn disabled" tabIndex="-1">
        disabled button
      </Button>
      <Button className="btn" disabled tabIndex="-1">
        disabled button
      </Button>
      <Button className="btn loading">button</Button>
      <Button className="btn btn-primary loading">primary button</Button>
      <div className="btn-group btn-group-block">
        <Button className="btn">first button</Button>
        <Button className="btn">second button</Button>
        <Button className="btn">third button</Button>
      </div>
      <IconsStyles />
      <UtilitiesStyles />
    </div>
  </>
);

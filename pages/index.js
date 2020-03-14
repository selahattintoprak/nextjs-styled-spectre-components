import Button from "../ui-components/button";
export const config = { amp: "hybrid" };
import styled from "styled-components";
import Button2 from "../styled-spectre/Button";
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primaryDark};
`;
export default () => (
  <>
    Hello World!
    <Button></Button>
    <div style={{ margin: "10px" }}>
      <Button2 disabled>tests</Button2>
    </div>
    <div style={{ margin: "10px" }}>
      <Button2>tests</Button2>
    </div>
    <Title>My page</Title>
    <div>
    <Button2 className="btn">default button</Button2>
    <Button2 className="btn btn-primary">primary button</Button2>
    <Button2 className="btn btn-link">link button</Button2>
    <Button2 className="btn btn-success">success button</Button2>
    <Button2 className="btn btn-error">error button</Button2>
    <Button2 className="btn btn-lg">large button</Button2>
    <Button2 className="btn btn-sm">small button</Button2>

    <Button2 className="btn btn-block">block button</Button2>

    <Button2 className="btn btn-primary btn-lg">
      <i className="icon icon-arrow-left"></i> large
    </Button2>
    <Button2 className="btn btn-primary">
      <i className="icon icon-arrow-left"></i> normal
    </Button2>
    <Button2 className="btn btn-primary btn-sm">
      <i className="icon icon-arrow-left"></i> small
    </Button2>
    <Button2 className="btn btn-action">
      <i className="icon icon-arrow-left"></i>
    </Button2>
    <Button2 className="btn btn-action s-circle">
      <i className="icon icon-arrow-left"></i>
    </Button2>
    <Button2 className="btn disabled" tabIndex="-1">
      disabled button
    </Button2>
    <Button2 className="btn" disabled tabIndex="-1">
      disabled button
    </Button2>
    <Button2 className="btn loading">button</Button2>
    <Button2 className="btn btn-primary loading">primary button</Button2>
    <div className="btn-group btn-group-block">
      <Button2 className="btn">first button</Button2>
      <Button2 className="btn">second button</Button2>
      <Button2 className="btn">third button</Button2>
    </div>
  </div>
  </>
);

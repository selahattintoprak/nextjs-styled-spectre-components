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
      <Button2>tests</Button2>
    </div>
    <div style={{ margin: "10px" }}>
      <Button2>tests</Button2>
    </div>
    <Title>My page</Title>
  </>
);

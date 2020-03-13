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
    <Button2>tests</Button2>
    <Button2>tests</Button2>
    <Title>My page</Title>
  </>
);

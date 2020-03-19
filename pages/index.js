import styled from "styled-components";

export const config = { amp: "hybrid" };

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primaryDark};
`;
export default () => <Title>Hello World!</Title>;

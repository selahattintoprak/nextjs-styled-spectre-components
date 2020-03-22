import { createGlobalStyle, css } from "styled-components";
import asianFonts from "./asian";

export default createGlobalStyle`
    ${({ asian }) => asian && asianFonts}
`;

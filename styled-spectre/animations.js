import { keyframes } from "styled-components";
export const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}`;
export const slideDown = keyframes`  
    0% {
        opacity: 0;
        transform: translateY(-$unit-8);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

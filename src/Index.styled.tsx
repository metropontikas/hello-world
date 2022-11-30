import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    background:#282c34;

    & *{
        box-sizing: border-box;
        margin:0
    }
}
`;

import { createGlobalStyle } from "styled-components"

export const lightmode = {
    FontColor : "#06d253",
    backgroundColor : "white"
}

export const darkmode = {
    FontColor : "white",
    backgroundColor : "black"
}

export const GlobalStyles = createGlobalStyle`
    body{
        background-color : ${ props => props.theme.backgroundColor };
        color : ${ props => props.theme.FontColor };
    }
`;

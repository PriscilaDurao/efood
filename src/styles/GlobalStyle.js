import { createGlobalStyle } from "styled-components";

export const colors = {
  bege: "#FFF8F2",
  rosa: "#E66767",
  branca: "#FFFFFF",
  begeClaro: "#FFEBD9",
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${colors.bege};
    color: ${colors.rosa};
  }
`;

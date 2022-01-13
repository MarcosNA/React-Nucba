import { createGlobalStyle } from 'styled-components'
import colors from "./colors";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    font-family: 'Roboto', sans-serif;
  }
  ul, li, h1, h2, h3, h4, h5, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }
  body {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
    padding: 0;
    overscroll-behavior: none;
    background: ${colors.White};
  }

  main {
    width: 100%;
    height: 100vh;
  }
`

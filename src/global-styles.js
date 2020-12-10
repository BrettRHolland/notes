import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    color: #000000;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.25rem;
  }

  p {
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  ol, ul {
    line-height: 1.2;
    margin: 0 0 1rem 2rem;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  textarea {
    line-height: 1.2;
  }

  a {
    border-bottom: 1px solid #000000;
    color: #000000;
    text-decoration: none;
  }

  hr {
    margin-bottom: 1rem;
  }

`;

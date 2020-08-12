import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  :root {
    --color-intent-bg: linear-gradient(
        180deg,
        rgba(129, 134, 140, 0.52) 0%,
        rgba(57, 58, 63, 0.59) 25%,
        #393a3f 100%
      ),
      #393a3f;

    --color-intent-text: #fff;

    --size-global-horizontal-bleed: 20px;

    --color-primary: #ee4b0e;
    --color-muted: #bdbdbd;
  }  

  html {
    height: 100%;
    font-size: 100%;
  }

  body {
    max-height: 100%;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
      box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
  }

  figure, img, h1, h2, h3, h4, h5, h6, li, ul {
    margin: 0;
    padding: 0;
  }


  html {
    scroll-behavior: smooth;
    height: 100%;
  }

  body {
    min-height: 100%;
  }

  html,
  body {
    background: var(--color-intent-bg);
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }

  footer {
    grid
  }
`;

export default GlobalStyles;

import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''),
        url('/fonts/roboto-v29-latin-300.woff2') format('woff2'),
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/roboto-v29-latin-regular.woff2') format('woff2'),
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(''),
        url('/fonts/roboto-v29-latin-500.woff2') format('woff2'),
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before, &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: #ebebeb;
    color: #333;
    font-family: "Roboto, -apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif";

  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;

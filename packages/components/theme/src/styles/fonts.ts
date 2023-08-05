import { css } from 'styled-components';

export default css`
  :root {
    font-family: 'Inter', sans-serif;
    font-display: swap;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @supports (font-variation-settings: normal) {
    :root {
      font-family: 'Inter var', sans-serif;
    }
  }
`;

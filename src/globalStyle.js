import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;600&family=Fraunces:opsz,wght@9..144,700;9..144,900&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  * {
    margin: 0;
  }


  body {
    font-family: 'Barlow', sans-serif;
  }

  :root {
    --soft-red: hsl(7, 99%, 70%);
    --yellow: hsl(51, 100%, 49%);
    --dark-desaturated-cyan: hsl(167, 40%, 24%);
    --dark-blue: hsl(198, 62%, 26%);
    --dark-moderate-cyan: hsl(168, 34%, 41%);
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;600&family=Fraunces:opsz,wght@9..144,700;9..144,900&display=swap');
`;

export default GlobalStyle;

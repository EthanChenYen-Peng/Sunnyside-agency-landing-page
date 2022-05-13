import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, #root {
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
    --dark-grayish-blue: hsl(232, 10%, 55%);
  }

`

export default GlobalStyle

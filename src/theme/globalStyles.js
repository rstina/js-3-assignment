import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  table {
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
    background: #fff;
    color: #888;
  }

  button {
    padding: 0.25rem;
  }
`

export default GlobalStyle;
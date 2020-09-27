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
    text-align: left;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
    background: #fff;
    color: #888;
  }

  tr:nth-child(even){
    background-color: #fff;
  }

  button {
    padding: 0.25rem;
  }
`

export default GlobalStyle;
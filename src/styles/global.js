import { createGlobalStyle } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: #181818;
    color: rgba(255,255,255,0.8);
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    text-rendering: optimizeLegibility !important;
    --webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .Toastify__toast--success {
    background: #4fcda5 !important;
  }

  .Toastify__toast--warning {
    background: #ddcc54 !important;
  }

  .Toastify__toast--error {
    background: #dd5554 !important;
  }

`

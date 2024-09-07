import { createRoot } from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import App from './App'

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const root = createRoot(document.querySelector('#root')!)
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
)

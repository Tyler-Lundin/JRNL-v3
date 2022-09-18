import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import App from './app/App'
import store from './app/store'

const GLOBAL_STYLES = createGlobalStyle`
  html, body {
    margin: 0;
    width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  }
  input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  background-color: rgba(255,255,255,.1);
  -webkit-text-fill-color: black !important;
  -webkit-box-shadow: 0 0 5px 5px rgba(255,255,255,.1) inset !important;
  box-shadow: 0 0 5px 5px rgba(255,255,255,.1) inset !important;
}
`

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <GLOBAL_STYLES />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)

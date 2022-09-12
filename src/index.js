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
`

const root = ReactDOM.createRoot(document.getElementById('root'))
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

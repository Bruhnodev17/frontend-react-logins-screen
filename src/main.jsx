import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles  from "./styles/globalStyles.js"
import Routes from './routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Routes />< GlobalStyles />
    </>
  </React.StrictMode>,
)

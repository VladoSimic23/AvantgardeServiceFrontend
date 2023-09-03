import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./globalCss/globalStyle.module.css"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode may cause twice rendering on development mode
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

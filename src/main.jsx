import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { EmailProvider } from './context/emailContext'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <EmailProvider>
        <App />
      </EmailProvider>
    </Router>
  </React.StrictMode>,
)

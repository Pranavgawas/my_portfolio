import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import analytics from './utils/analytics.js'

// Initialize analytics
if (typeof window !== 'undefined') {
  analytics.setupAutoTracking();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App'
createRoot(document.getElementById('spaceTourism')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

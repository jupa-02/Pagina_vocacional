import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CareerProvider } from './store/CareerContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CareerProvider>
      <App />
    </CareerProvider>
  </StrictMode>,
)

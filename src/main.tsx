import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ContextCounterProvider from './context/ContextCounterProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextCounterProvider>
      <App />
    </ContextCounterProvider>

  </StrictMode>,
)

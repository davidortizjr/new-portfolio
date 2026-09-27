import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import NotFound from './pages/NotFound.tsx'

const isHome = window.location.pathname === '/'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isHome ? <App /> : <NotFound />}
  </StrictMode>,
)

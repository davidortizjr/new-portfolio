import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import NotFound from './pages/NotFound.tsx'
import CV from './pages/CV.tsx'

const path = window.location.pathname

function Router() {
  if (path === '/') return <App />
  if (path === '/cv') return <CV />
  return <NotFound />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)

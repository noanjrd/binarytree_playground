import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { TreeProvider } from './contexts/TreeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TreeProvider>
    <App />
    </TreeProvider>
  </StrictMode>,
)

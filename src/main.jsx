import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Myapp from './Myapp.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Myapp />
    </BrowserRouter>
  </StrictMode>,
)

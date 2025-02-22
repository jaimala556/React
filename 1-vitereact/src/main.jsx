import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Crausl from './Crausl.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Crausl />
  </StrictMode>,
)

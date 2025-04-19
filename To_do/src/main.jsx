import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home/home.jsx'
import Contact from './pages/contact/contact.jsx'
import About from './pages/about/about.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
     <Contact/>
    {/* <App /> */}
  </StrictMode>,
)

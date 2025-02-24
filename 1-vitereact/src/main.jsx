import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Crausl from './Crausl.jsx'
import App from './App.jsx'
import Model from './Model.jsx'
import Accordin from './Accordin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Accordin />
  </StrictMode>,
)

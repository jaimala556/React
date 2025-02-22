import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'

function App() {
  // const [color,setColor] = useState("olive")
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(flase)
  const [charAllowed,setCahrectorAllowed] = useState(flase)
  const [password,setPassword] = useState("")

  return (
    <>
      
        <h2 className='text-4xl text-center text-white mt-0'>Password Generator</h2>
    </>
  )
}

export default App

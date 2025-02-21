import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [color,setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen flex item-center justify-center ' style={{backgroundColor:color}}>
        <h2 >Password Generator</h2></div>
    </>
  )
}

export default App

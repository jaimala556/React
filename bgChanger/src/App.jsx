
import { useState } from 'react'
// import './App.css'

function App() {
  const [color,setColor]= useState("olive")

  return (
  <div className="w-full h-screen duration-200"
  style={{backgroundColor:color}}>
  <div className='flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-1'>
    <div className='flex flex-wrap gap-3 shadow-lg bg-white px-2 py-1 rounded 2xl'>
      
      <button onClick ={()=> setColor("red")}
      className='outline-none px-4 py-1 text-black rounded-full shadow-lg' style={{backgroundColor:"red"}}> RED</button>
      <button onClick ={()=> setColor("green")} className='outline-none px-4 py-1 text-black rounded-full shadow-lg' style={{backgroundColor:"green"}}> Green</button>
      <button onClick ={()=> setColor("blue")} className='outline-none px-4 py-1 text-black rounded-full shadow-lg' style={{backgroundColor:"blue"}}> Blue</button>
      <button onClick ={()=> setColor("yellow")} className='outline-none px-4 py-1 text-black rounded-full shadow-lg' style={{backgroundColor:"yellow"}}> Yellow</button>
      <button onClick ={()=> setColor("pink")} className='outline-none px-4 py-1 text-black rounded-full shadow-lg' style={{backgroundColor:"pink"}}>pink</button>
      <button onClick ={()=> setColor("purple")} className='outline-none px-4 py-1 text-black rounded-full shadow-lg' style={{backgroundColor:"purple"}}>Purple</button>
    </div>
  </div>
  </div>
  )
}

export default App

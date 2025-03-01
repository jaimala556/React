import { useState } from 'react'

function Bgprectice () {
  const [color,setColor] = useState("olive")

  return (
     <div className="w-full h-screen duration-200"
  style={{backgroundColor:color}}>
  <div className='flex fixed flex-wrap justify-center touch-pan-left-12 inset-x-0 px-1'>
    <div className='flex flex-wrap gap-2 bg-white rounded-2xl py-2 px-2'>
      <button onClick={()=>setColor("red")} className='shadow-lg   rounded-full px-4  py-1 outline-none text-black'style={{backgroundColor:"red"}}>Red</button>
      <button onClick={()=>setColor("blue")} className='shadow-lg   rounded-full px-4  py-1 outline-none text-black'style={{backgroundColor:"blue"}}>Blue</button>
      <button onClick={()=>setColor("green")} className='shadow-lg   rounded-full px-4  py-1 outline-none text-black'style={{backgroundColor:"Green"}}>Green</button>
      <button onClick={()=>setColor("purple")} className='shadow-lg   rounded-full px-4  py-1 outline-none text-black'style={{backgroundColor:"purple"}}>purple</button>
      <button onClick={()=>setColor("lavender")} className='shadow-lg   rounded-full px-4  py-1 outline-none text-black'style={{backgroundColor:"lavender"}}>Lavender</button>
      <button onClick={()=>setColor("pink")} className='shadow-lg   rounded-full px-4  py-1 outline-none text-black'style={{backgroundColor:"pink"}}>Pink</button>
      <button onClick={()=>setColor("white")} className='shadow-lg   rounded-full px-4  py-1 outline-none text-black'style={{backgroundColor:"white"}}>White</button>
    </div>
  </div>
  </div>
  )
}

export default Bgprectice
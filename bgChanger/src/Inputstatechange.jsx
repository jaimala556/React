import React from 'react'
import { useState } from 'react'
const Inputstatechange = () => {
    const[inputchange,setInputChange]=useState('')
    const handleInputChange=(event)=>{
          setInputChange(event.target.input)
    }

  return (
    <div> <input 
    type="text" 
    value={inputValue} 
    onChange={handleInputChange} // Update state on every keystroke
  />
  
  <p>You typed: {inputValue}</p></div>
  )
}

export default Inputstatechange
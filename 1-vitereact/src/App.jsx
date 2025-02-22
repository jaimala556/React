import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState(0)
  const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
  }

  const colors = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-pink-500",
    "bg-yellow-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-orange-500",
    "bg-purple-500",
    "bg-cyan-500",
  ];

  return (
    <div className={`w-full min-h-screen ${colors[color]}`} >
      <h1 className="text-3xl font-bold underline text-blue-500 w-3">Hello world!</h1>
      <button onClick={() => setColor(getRandomNumber())} type="button" className="bg-sky-400 hover:bg-sky-500 rounded-md p-2 text-white transition-all ">click here</button>
    </div>
  )
}

export default App


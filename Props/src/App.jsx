import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myobj={
    name:"arya",
    age:30
  }
  let newArr=[1,2,3]
  return (
    <>
     <h1 className='text-black mb-4 p-4 rounded-xl bg-green-900'>Tailwind test </h1>
    {/* <Card channel="chaiaurcode" someObje={myobj}/> */}
     <Card userName="chaiaurcode" btnText="click me"/> 
    <Card  userName="chaiaurcode" btnText="visit me"/>

    </>
  )
}

export default App

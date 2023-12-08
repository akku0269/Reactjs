import { useState } from 'react'

import './App.css'
import Card  from './components/card'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Akash",
    age: 19,
  }
  let newArr = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 '>Tailwind Test</h1>
      {/* <Card username="chaiaurcode" someObj={myObj} array={newArr}/> */}
      <Card username="chaiaurcode" btnText="Click me"/>
      <Card username="AkashaurCode" btnText="Visit me"/>
      
    </>
  )
}

export default App

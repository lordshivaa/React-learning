import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () =>{
    // counter = counter + 1
    setCounter(pervCounter => pervCounter + 1)
    setCounter( pervCounter => pervCounter + 1 )
    setCounter(pervCounter => pervCounter + 1)
    setCounter(pervCounter => pervCounter + 1)
    setCounter(pervCounter => pervCounter + 1)
    console.log(counter); 

  }

  const removeValue = () => {
    counter = counter - 1
    setCounter(counter)

  }

  return (
    <>
    <h1>React learning</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value {counter}</button>
    <p>Footer {counter}</p>
    </>
  )
}

export default App

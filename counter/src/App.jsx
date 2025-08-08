import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter,setCounter]=useState(0)
  const addValue=()=>{
    // counter =counter+1;
    // console.log("value added ", counter);
    // setCounter(counter)
      if (counter<20) {
      setCounter(counter + 1);
    }
  }
  const removeValue=()=>{
  //  counter =counter-1;
  //   console.log("value Remove ", counter);
  //   setCounter(counter)
    if (counter>0){
      setCounter(counter-1);
  }
}

  return (
    <>
     <h2>Vite + React</h2>
     <h2>Counter value : {counter} </h2>
     <button onClick={addValue}>Add Value</button><br /><br />
     <button onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App

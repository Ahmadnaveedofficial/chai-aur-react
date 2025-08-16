import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdTodos from './components/AdTodos'
import Todos from './components/Todos'

function App() {

  return (
    <>
     <h1>Vite + React + ReduxToolKit</h1>
     <AdTodos/>
     <Todos/>
    </>
  )
}

export default App

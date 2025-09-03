import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const handleCount=()=>{
    setCount(count+1);
  }

  return (
    <>
    <Navbar count={count}/>
      <h1>UseContext Hook in React</h1>
      <button onClick={handleCount}>Count is {count}</button>
    </>
  )
}

export default App

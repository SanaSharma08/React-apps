import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { counterContext } from './context/context'

function App() {
  const [count, setCount] = useState(0)
  const handleCount=()=>{
    setCount(count+1);
  }

  return (
    <>
    pass both count & setCount to change count value from both App.jsx 7 Button.jsx
    <counterContext.Provider value={{count,setCount}}>
    <Navbar/>
      <h1>UseContext Hook in React</h1>
      <button onClick={handleCount}>Count is {count}</button>
    </counterContext.Provider>
    </>
  )
}

export default App

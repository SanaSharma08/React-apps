import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [Name,setName] = useState("Harry")
  const [form,setform] = useState({email:"",phone:"",age:"12"})
  const box=useRef();
  const handleClick=()=>{
    const para=box.current.querySelector(".para");
    para.textContent="Hey! Button was clicked.";
    para.style.color="red";
  }
  const handleMouseOver=()=>{
    const para=box.current.querySelector(".para");
    para.style.color="orange";
  }

  const handleChange=(e)=>{
    // setName(e.target.value)
    setform({...form,[e.target.name]:e.target.value})
    console.log(form)
  }
  return (
    <>
      <div className="button" ref={box}>
        <p className='para' onMouseOver={handleMouseOver}></p>
        <button onClick={handleClick}>Click Me!!!!</button>
      </div>
      {/* <input type="text" value={Name} onChange={handleChange}/> */}
      <input type="text" name='email' value={form.email ? form.email : ""} onChange={handleChange}/>
      <input type="phone" name='phone' value={form.phone ? form.phone : ""} onChange={handleChange}/>
    </>
  )
}

export default App

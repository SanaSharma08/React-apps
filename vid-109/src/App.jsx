import { useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const a = useRef(0)
  const refbtn=useRef()
  const pboxref=useRef()
  const href=useRef()
  const href1=useRef()
  const href2=useRef()
  const href3=useRef()
  let b=0;
  useEffect(() => {
    refbtn.current.style.backgroundColor="pink";
  },[])//renders only once at start
  useEffect(() => {
    a.current=a.current+1;
    b=b+1;
    console.log(`rendering the value of a: ${a.current} `) //persists
    console.log(`rendering the value of b: ${b} `) //always prints 1
  })//runs on every render
  
  const aref = useRef()
  function printa(){
    aref.current.textContent=`a is : ${a.current}`;
  }
  function changeCountCol(){
    const colors = [
      "red",
      "blue",
      "green",
      "yellow",
      "purple",
      "orange",
      "pink",
      "brown",
      "cyan",
      "magenta",
      "lime",
      "indigo",
      "violet",
      "teal",
      "olive",
      "maroon",
      "navy",
      "gold",
      "silver",
      "aqua"
    ];
    let random=Math.floor(Math.random()*colors.length);
    refbtn.current.style.backgroundColor=colors[random];
  }
  function inbox(){
      pboxref.current.querySelector("h1").replaceWith(href.current);
      href.current.style.display="block";
  }
  function inbox1(){
      pboxref.current.querySelector("h1").replaceWith(href1.current);
      href1.current.style.display="block";
  }
  function inbox2(){
      pboxref.current.querySelector("h1").replaceWith(href2.current);
      href2.current.style.display="block";
  }
  function inbox3(){
      pboxref.current.querySelector("h1").replaceWith(href3.current);
      href3.current.style.display="block";
  }



  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={refbtn} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* //prints value from last render since useref does not trigger re-render hence this value is different fromvalue in console. */}
        <p>ref a is : {a.current} (not the actual value of a)</p> 
        {/* //Hence use this method to do DOM manipulation, i.e do not use useRef with components that require re-render to update eg= above p(useState for this). use useRef for components that do not require re-rendering to update, i.e events , functions, actions etc.  */}
        <button onClick={changeCountCol}>Change count color hehe..</button>
        <button onClick={printa}>Print a</button>
        {/* Prints correct value of a-same as console */}
        <button onClick={inbox} >Yo</button>
        <button onClick={inbox1} >Hi</button>
        <button onClick={inbox2} >Hello</button>
        <button onClick={inbox3} >Goodnight</button>
        <p ref={aref}></p>
        <div className="box" ref={pboxref}>
          <h1>NAMASTE</h1>
        </div>
        <h1 ref={href} style={{display:"none"}}>  YO </h1>
        <h1 ref={href1} style={{display:"none"}}> Hi </h1>
        <h1 ref={href2} style={{display:"none"}}>  Hello </h1>
        <h1 ref={href3} style={{display:"none"}}> Goodnight </h1>
      </div>
    </>
  )
}

export default App

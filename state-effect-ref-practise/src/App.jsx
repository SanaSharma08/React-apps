import { useState , useRef ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [bgcol, setbgcol] = useState("orange");
  const box = useRef(null);
  const [colours, setcolours] = useState([
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
    ]);
  
useEffect(() => { //required for re-render because useRef does not trigger rerender & DOM changes using useRef requires re-render.
    box.current.style.backgroundColor=bgcol;
    console.log(bgcol);
  }, [bgcol]);
const changeColor = ()=>{
    let random=Math.floor(Math.random()*colours.length);
    setbgcol(colours[random]); // state is changing here but the DOM element is not directly linked to the bgcol hence the dom element is not re-rendered if we don't useeffect in bgcol - colours will change on the backend but to render, we need useeffect.
  }
  return (
    <>
    <div className="pin" ref={box} onClick={changeColor}>Click To Change Colour!</div>
    {/* 2nd approach - useEffect snippet is not required for this case since- dom element style is directly linked to state- usestate triggers re-render*/}
    {/* <div className="pin" ref={box} onClick={changeColor} style={{backgroundColor:bgcol}}>Click To Change Colour!</div> */}
    </>
  )
}

export default App

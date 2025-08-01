import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true)
  const [Tasks,setTask] = useState([
    { id: 1, text: "Learn React basics" },
    { id: 2, text: "Practice JavaScript" },
    { id: 3, text: "Build a small project" },
    { id: 4, text: "Read about React Hooks" },
    { id: 5, text: "Explore Tailwind CSS" }
  ]);
  const Todo= () => { return (<>
    <div className="todo">I am todo, i appear on false showbtn</div>
  </>)} //component
  function updateList(id){
    setTask(Tasks.map(task =>(task.id===id? {...task,text:"Build a massive project!-update"}:task)));
  } //update list functions

  return (
    <>
      <h1>Conditional Rendering & Rendering Lists in React</h1>
      {/* list rendering */}
      
      {Tasks.map(task =>(
        <div key={task.id} className='m-4 border-2 border-amber-600'>{task.text}</div>
      ))}
      {/* we used tailwind */}
      <button onClick={()=>updateList(5)}>update list</button>
      {/* since settask rerender the ui hence the updated list automatically shows on screen without manual mapping again */}
      
      {/* list rendering code ends */}

      {showbtn?<button>showbtn is true</button>:<button>showbtn is false</button>}
      {/* {showbtn && <button>I will appear only when another btn is clicked</button>} */}
      {showbtn? "Todo is shy for true value":<Todo/> } {/* //conditional rendering of a mini component */}
      
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>Toggle showbtn</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

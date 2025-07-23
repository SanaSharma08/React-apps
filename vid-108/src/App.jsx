import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [col, setCol] = useState(0)
  const [joke, setJoke] = useState("Why did the React component get kicked out of the party? Because it kept trying to change state without using useState!")
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my computer I needed a break, and now it won’t stop sending me KitKat ads.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why was the JavaScript developer sad? Because they didn’t know how to ‘null’ their feelings.",
    "I would tell you a UDP joke, but you might not get it.",
    "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
    "Why do Java developers wear glasses? Because they can’t C#.",
    "There are only 10 types of people in the world: those who understand binary and those who don’t.",
    "I changed my password to 'incorrect' so every time I forget it, the computer says 'Your password is incorrect.'",
    "Why was the function feeling bad? Because it didn’t get called!"
  ];
  // Case 3: runs when a component is rendered/re-rendered
  useEffect(() => {
    alert("count was changed!");
    setCol(col+1); //trigger color useeffect too
  }, [count])

  //example of cleanup function
  useEffect(() => {
    alert("Enjoy the joke!");
    return ()=>{ //clean up function - optional
      alert("Component was unmounted!")
    }
  }, [joke])
  
  return (
    <>
      <Navbar color={"cotton" + " candy" + col}/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() =>{
          setCount(count+1)
        }}>
          count is {count}
        </button>
        <button onClick={()=>{
          const random=Math.floor(Math.random()*jokes.length);
          setJoke(jokes[random])
        }}>New Joke!</button>
        <p>{joke}</p>
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

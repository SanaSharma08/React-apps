import { useState } from 'react'
import './App.css'
//  Using useState() & learning about hooks & states in this lesson
function App() {
  const [count, setCount] = useState(10)
  const [title, setTitle] = useState("Good Evening")

  return (
    <>
    <div className="title">{title}</div>
    <button onClick={()=>{
      const greetings = [
        "Hello!",
        "Hi there!",
        "Greetings!",
        "Hey!",
        "Howdy!",
        "Bonjour!",
        "Hola!",
        "Aloha!",
        "Salutations!",
        "What's up?",
      ];
      let random=(Math.floor(Math.random()*(greetings.length)));
      setTitle(greetings[random]);
    }}>Update Title</button>
    <div>The count is {count}</div>
    <button onClick={()=>{setCount(count+1)}}>Update Count</button>
    </>
  )
}

export default App

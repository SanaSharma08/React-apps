import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AchievementCarousel from './components/AchievementCarousel'
import PORGrid from './components/PORGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AchievementCarousel/>
      <PORGrid/>
    </>
  )
}

export default App

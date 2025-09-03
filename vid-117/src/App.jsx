import { useState , useMemo} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const nums = new Array(30_000_000).fill(0).map((_, i)=>{
  return{
    index:i,
    isMagical: i===29_000_000
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState(nums)

  // const magical=numbers.find(item=>item.isMagical===true)
  const magical = useMemo(() => numbers.find(item=>item.isMagical===true), [numbers]) // dependency array
  return (
    <>
    <h1>Magical Number is {magical.index}</h1>
      <div className='flex justify-between item-center gap-20'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-red-400'>useMemo Hook</h1>
      <div className="card">
        <button className='bg-pink-200' onClick={() => { // changing numbers on count=10; - DOM changes if numbers is set as a dependency in useMemo
          setCount((count) => count + 1);
          if(count==10){
            setNumbers(new Array(10_000_000).fill(0).map((_, i)=>{
              return{
                index:i,
                isMagical: i===9_000_000
              }
            }))
          }
          }}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App

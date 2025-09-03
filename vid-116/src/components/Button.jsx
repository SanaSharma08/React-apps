import React from 'react'
import Component1 from './Component1'
import { useContext } from 'react'
import { counterContext } from '../context/context'

const Button = () => {
    const counter=useContext(counterContext);
  return (
    <div>
        <button onClick={()=>counter.setCount(counter.count+1)}><span><Component1/></span>I AM A BUTTON</button>
    </div>
  )
}

export default Button
import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective, getAdjective}) => {
    console.log("Navbar is rendered")
  return (
    <>
        <h1>I am an {adjective} Navbar.</h1>
        <button onClick={()=>getAdjective()}>Change me {getAdjective()}</button>
    </>
  )
}

export default memo(Navbar)
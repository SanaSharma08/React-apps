import React from 'react'
import { useEffect } from 'react'

const Navbar = ({color}) => {
    
// Case 1: Runs on every render/re-render
  useEffect(() => {
    alert("Hey! I run on every render");
  })
  // Case2: Runs once on load/reload
  useEffect(() => {
    alert("Hey!Welcome to my page");
  }, [])
  
    useEffect(() => {
      alert("color was changed!")
    }, [color])
    
  return (
    <div>I am navbar of {color} color hehe...</div>
  )
}

export default Navbar
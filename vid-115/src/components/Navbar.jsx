import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <nav className='bg-purple-200'>
            <ul className='text-purple-500 font-bold'>
            {/* <Link></Link> converts to <a href=""></a> only in runtime so it is not a new tag - but in react router, it eliminates the mandatory reload property of <a href=""></a> */}
                <NavLink className={({isActive})=>`text-lg font-medium px-4 py-2 transition-colors duration-200 hover:text-red-500
    ${isActive ? "text-blue-500 font-bold" : "text-gray-700"}`} to="/"><li>Home</li></NavLink> 
                <NavLink className={({isActive})=>`text-lg font-medium px-4 py-2 transition-colors duration-200 hover:text-red-500
    ${isActive ? "text-blue-500 font-bold" : "text-gray-700"}`} to="/about"><li>About</li></NavLink>
                <NavLink className={({isActive})=>`text-lg font-medium px-4 py-2 transition-colors duration-200 hover:text-red-500
    ${isActive ? "text-blue-500 font-bold" : "text-gray-700"}`} to="/login"><li>Login</li></NavLink>
                <NavLink className={({isActive})=>`text-lg font-medium px-4 py-2 transition-colors duration-200 hover:text-red-500
    ${isActive ? "text-blue-500 font-bold" : "text-gray-700"}`} to="/user"><li>User</li></NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
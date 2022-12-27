import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <h1>Flourish DevOps</h1>
      <div className='links'>
         <Link to='/'>Home</Link>
         <Link to='/aboutUs'>About Us</Link>
         <Link to='/projects'>Our Work</Link>
         <Link to='/services'>Services</Link>
      </div>
    </nav>
  )
}

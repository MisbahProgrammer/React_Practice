import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    
  return (
    <>
    <header className='flex items-center justify-between'>
        <div className='text-2xl font-semibold p-3 m-3'>Practice</div>
        <nav className='flex gap-5 items-center justify-items-end p-3 m-3'>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    </header>
    </>
  )
}

export default Header
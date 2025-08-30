import React, { useState } from 'react'
import './Navbar.css'
import {BrowserRouter as Router, NavLink, Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Contact from './Pages/Contact'

export default function Navbar() {
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <Router>
    <nav className='navbar'>
    <div className='navbar-logo'>Website</div>
    <div className='menu' onClick={toggleMenu}>
        <div className='menu-icon'></div>
        <div className='menu-icon'></div>
        <div className='menu-icon'></div>
    </div>
    <ul className={isMenuOpen?'navbar-links active':'navbar-links'}>
        <li>
            <NavLink to='/' onClick={toggleMenu}>Home</NavLink>
        </li>
        <li>
            <NavLink to='/about' onClick={toggleMenu}>About</NavLink>
        </li>
        <li>
            <NavLink to='/service' onClick={toggleMenu}>Services</NavLink>
        </li>
        <li>
            <NavLink to='/contact' onClick={toggleMenu}>Contact</NavLink>
        </li>
    </ul>
    </nav>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </Router>
  )
}

import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        <Link className='navbar__logo' exact to='/'>
          Navbar App
        </Link>
        <li className='navbar__list__item'>
          <NavLink className='navbar__link' to='/'>
            Home
          </NavLink>
        </li>
        <li className='navbar__list__item'>
          <NavLink className='navbar__link' to='/about'>
            About
          </NavLink>
        </li>
        <li className='navbar__list__item'>
          <NavLink className='navbar__link' to='/services'>
            Services
          </NavLink>
        </li>
        <li className='navbar__list__item'>
          <NavLink className='navbar__link' to='/gallery'>
            Gallery
          </NavLink>
        </li>
        <li className='navbar__list__item'>
          <div className='navbar__link'>
            Iniciar sesión
          </div>
        </li>
        <div className='navbar__button' onClick={toggleSidebar}>
          <div className='navbar__button__component' />
          <div className='navbar__button__component' />
          <div className='navbar__button__component' />
        </div>
      </ul>
    </nav>
  )
}

export default Navbar

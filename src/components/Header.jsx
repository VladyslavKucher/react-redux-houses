import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <Link to={'/'} className='header__name'>CompanyName</Link>
      <div className='header__button'>
        <div className='header__houses'>Houses</div>
        <div className='header__about'>About</div>
        <div className='header__contact'>Contact Us</div>
      </div>
    </div>
  )
}

export default Header

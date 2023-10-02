import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <Link to={'/'} className='header__name'>West Palm Beach, Real Estate</Link>
    </div>
  )
}

export default Header

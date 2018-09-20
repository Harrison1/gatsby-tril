import React from 'react'
import { Link } from 'gatsby'
import TrilogyLogo from './icons/TrilogyLogo'

const Header = () => 
  <header className='header'>
    <div className='container inner-header'>
      <Link to="/" className='logo g-item-1'>
        <TrilogyLogo width='250px' />
      </Link>
      <p className='header-text g-item-2'><span className='dsk-block'>To speak with an</span> admissions advisor please call <a href='tel:5611234567'>(561) 123-4567</a></p>
    </div>
  </header>

export default Header

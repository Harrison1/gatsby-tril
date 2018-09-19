import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header className='header'>
    <div className='container inner-header'>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <p>To speak with an<br />admissions advisor please call <a href='tel:5611234567'>(561) 123-4567</a></p>
    </div>
  </header>
)

export default Header

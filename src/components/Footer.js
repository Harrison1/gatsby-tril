import React from 'react'
import { Link } from 'gatsby'
import TrilogyLogoBlk from './icons/TrilogyLogoBlk'

const Footer = () =>
    <footer>
      <div className="container footer-flex">
        <Link to="/" className="logo">
          <TrilogyLogoBlk width='250px' />
        </Link>
        <div>
          <p>This program is offered through<br />aklsjfkjakasaskcjoajcn <a href='https://sld;fm;lsdf;/'>https://sld;fm;lsdf;/</a><br />Powered by Trilogy Education Services<br /> Contact l;;lkalkc Boot Camp at <a href="tel:xxxxxxxxxx">(xxx) xxx-xxxx</a></p>
          <p><strong>Terms and Conditions</strong> | Privacy/Your Privacy Rights</p>
        </div>
      </div>
    </footer>

export default Footer

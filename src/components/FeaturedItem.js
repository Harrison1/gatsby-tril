import React from 'react'

const FeaturedItem = ({ content, svg }) =>
  <div className='featured-item'>
    { svg }
    <p>{ content }</p>
  </div>

export default FeaturedItem

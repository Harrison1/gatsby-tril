import React from 'react'

const HeroFeature = ({ color, content, title }) =>
  <div className={`hero-feature${color ? ` ${color}` : ''}`}>
    <h2>{ title }</h2>
    <p>{ content }</p>
  </div>

export default HeroFeature
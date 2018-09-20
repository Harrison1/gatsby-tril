import React from 'react'

const SectionTitle = ({ color, title }) =>
    <h2 className={`section-title${color ? ` ${color}` : ''}`}>{ title }</h2>

export default SectionTitle

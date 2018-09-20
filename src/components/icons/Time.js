import React from 'react'

const Time = ({ height, width }) =>
  <svg version="1.1" id="timeicon" xmlns="http://www.w3.org/2000/svg" width={ width } height={ height } x="0px" y="0px" aria-labelledby="timeiconTitle" viewBox="0 0 285 280">
    <title id="timeiconTitle">Time Icon</title>
    <path className='blue-icon' d="M201.3,131.3h-52.5V70c0-4.8-3.9-8.8-8.8-8.8s-8.8,3.9-8.8,8.8v70c0,4.8,3.9,8.8,8.8,8.8h61.3
      c4.8,0,8.8-3.9,8.8-8.8C210,135.2,206.1,131.3,201.3,131.3z"/>
    <path className='blue-icon' d="M140,0C62.7,0,0,62.7,0,140s62.7,140,140,140s140-62.7,140-140S217.3,0,140,0z M140,253.8
      c-62.7,0-113.8-51-113.8-113.8c0-62.7,51-113.8,113.8-113.8s113.8,51,113.8,113.8C253.8,202.7,202.7,253.8,140,253.8z"/>
  </svg>

export default Time

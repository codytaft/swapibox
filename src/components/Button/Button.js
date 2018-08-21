import React from 'react'
import './Button.css'

const Button = ({ onClick, name, favorites }) => {
  return (
    <button 
      className={favorites ? 'favoriteBtn' : {name}} 
      onClick={onClick}
      value={name}
    >
    {name}
    </button>
  )
}
export default Button
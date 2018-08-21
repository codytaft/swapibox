import React from 'react'
import './Button.css'

const Button = ({ onClick, name, favorites }) => {
  return (
    <button 
      className={favorites ? 'favoriteBtn' : 'button'} 
      onClick={onClick}
    >
    {name}
    </button>
  )
}
export default Button
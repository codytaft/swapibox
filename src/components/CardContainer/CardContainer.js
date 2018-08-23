import React from 'react'
import './CardContainer.css';
import Card from '../Card/Card.js'

const CardContainer = ({displayData, selectFavorite}) => {
  return (
    <div className="card-container">
      <Card displayData={displayData} selectFavorite={selectFavorite}/>
    </div>
  )
}

export default CardContainer;
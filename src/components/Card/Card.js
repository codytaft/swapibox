import React from 'react'
import './Card.css'

const Card = ({ displayData, selectFavorite, favoritesDisplaying, removeFavorite }) => {
  return displayData.map((individualData) => {
    return (
      <div className="card">
        <div className="card-title">
          <h1 className="name">{individualData.name}</h1>
          <button className="favorites-btn" onClick={() => selectFavorite(individualData.name)}></button>
        </div>
        <div className="card-data">
          <p className="species stat">Species:{individualData.Species}</p>
          <p className="homeworld stat">Homeworld: {individualData.Homeworld}</p>
          <p className="population stat">Population: {individualData.Population}</p>
        </div>
      </div>
    )
  })
}

export default Card
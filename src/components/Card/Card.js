import React from 'react' 
import './Card.css'

const Card = ({displayData, selectFavorite}) => {
  return displayData.map((individualData) => {
    return (
      <div className="card">
        <div className="card-title">
          <h1 className="name">{individualData.name}</h1>
          <button className="favorites-btn" onClick={() => selectFavorite(individualData.name)}></button>
        </div>
        <div className="card-data">
          <p className="species">{individualData.Species}</p>
          <p className="homeworld">{individualData.Homeworld}</p>
          <p className="population">{individualData.Population}</p>
        </div>
      </div>
    )
  })
}

export default Card
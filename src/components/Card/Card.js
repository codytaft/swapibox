import React from 'react'
import './Card.css'
import classNames from 'classnames/bind';

const Card = ({ displayData, selectFavorite, favorites }) => {
  return displayData.map((individualData) => {
    const buttonClass = classNames({
      card: true,
      selected: favorites.find(card => card.name === individualData.name)
    })

    return (
      <div className="card">
        <div className="card-title">
          <h1 className="name">{individualData.name}</h1>
          <button className={buttonClass} onClick={() => selectFavorite(individualData.name)}></button>
        </div>
        <div className="card-data">
          <p className="species stat">Species:{individualData.Species}</p>
          <p className="homeworld stat">Homeworld: {individualData.Homeworld}</p>
          <p className="population stat">Population: {individualData.Population}</p>
        </div>
      </div>
    )
  })
};

export default Card

// {
//   Species: 'Human'
// }

// <p>{`${key}: ${value}`}</p>
import React from 'react'
import './Card.css'
import classNames from 'classnames/bind';

const Card = ({ displayData, selectFavorite, favorites }) => {
  return displayData.map(individualData => {
    return (
      <div className="card">
        <span className="card-title">
          <h1 className="name">{individualData.name}</h1>
          <button>FAV</button>
        </span>
        <p className="stat">{Object.keys(individualData.stats).map(stat => {
          return (
            <p className="individual-stat">{`${stat}: ${individualData.stats[stat]}`}</p>
          )
        })}</p>
      </div>
    )
  })
};

export default Card


    // const buttonClass = classNames({
    //   card: true,
    //   selected: favorites.find(card => card.name === displayData.name)
    // }
    // )
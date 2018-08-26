import React from 'react';
import './Card.css';
import classNames from 'classnames/bind';
import favorite from '../../images/mark.svg';

const Card = ({ displayData, selectFavorite, favorites }) => {
  return displayData.map((individualData, index) => {
    const buttonClass = classNames({
      cardbtn: true,
      selected: favorites.find(card => (card.name === individualData.name))
    });
    return (
      <div className="card" key={'card' + index}>
        <span className="card-title" key={'tite' + index}>
          <h1 className="name">{individualData.name}</h1>
          <button className={buttonClass} onClick={() => selectFavorite(individualData.name)}><img className={`img${buttonClass}`} src={favorite} alt="button" /></button>
        </span>
        <ul className="stat">{Object.keys(individualData.stats).map((stat, index) => {
          return (
            <li className="individual-stat" key={stat + index}>{`${stat}: ${individualData.stats[stat]}`}</li>
          );
        })}</ul>
      </div>
    );
  });
};

export default Card;

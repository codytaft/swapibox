import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
import logo from '../../images/Star_Wars_Logo.svg';


const CardContainer = ({ displayData, selectFavorite, crawlingText, removeFavorite, favoritesDisplaying, isFavoriteSelected, favorites }) => {
  const { episode, title, scrawl, date } = crawlingText;
  console.log(episode)
  if (displayData.length > 0) {
    return (
      <div className="card-container">
        <Card displayData={displayData}
          selectFavorite={selectFavorite}
          removeFavorite={removeFavorite}
          isFavoriteSelected={isFavoriteSelected}
          favoritesDisplaying={favoritesDisplaying}
          favorites={favorites} />
      </div>
    );
  }

  if (!favorites.length && favoritesDisplaying) {
    return (
      <div className="empty-wrapper">
        <div className="empty-greeting">
          <h1>No Favorites Selected</h1>
        </div>
      </div>
    );
  };

  if (episode) {
    return (
      <div className="card-container">
        <div className="fade"></div>
        <section className="star-wars">
          <div className="crawl">
            <div className="title">
              <p>Episode {episode}</p>
              <h1>{title}</h1>
            </div>
            <p>{scrawl}</p>
            <p>Release Date: {date}</p>
          </div>
        </section>
      </div>
    );
  } else {
    return (
      <div className="logo"> 
        <img src={logo} alt="Star-Wars-Logo" className="star-wars-logo"/>
      </div>
    )
  }
};

CardContainer.propTypes = {
  displayData: PropTypes.array,
  selectFavorite: PropTypes.func,
  crawlingText: PropTypes.object,
  removeFavorite: PropTypes.func,
  favoritesDisplaying: PropTypes.bool,
  isFavoriteSelected: PropTypes.bool,
  favorites: PropTypes.array
};

export default CardContainer;
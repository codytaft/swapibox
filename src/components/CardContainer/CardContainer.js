import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card.js';

const CardContainer = ({ displayData, selectFavorite, crawlingText, removeFavorite, favoritesDisplaying, isFavoriteSelected, favorites }) => {
  const { episode, title, scrawl, date } = crawlingText;
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
  }

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
};

export default CardContainer;
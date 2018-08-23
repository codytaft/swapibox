import React from 'react'
import './CardContainer.css';
import Card from '../Card/Card.js'

const CardContainer = ({displayData, selectFavorite, crawlingText}) => {
  // console.log(displayData.length > 1)
  const { episode, title, scrawl } = crawlingText;
  if (displayData.length > 1) {
    return (
      <div className="card-container">
        <Card displayData={displayData} selectFavorite={selectFavorite}/>
      </div>
    )
  } return (
    <div className="card-container">
      <div className="fade"></div>
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <p>Episode {episode}</p>
            <h1>{title}</h1>
          </div>
          <p>{scrawl}</p>     
        </div>
      </section>
    </div>
  );
}

export default CardContainer;
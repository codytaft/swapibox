import React from 'react';
import './Welcome.css';

 export const Welcome = ( { crawlingText }) => {
  const { episode, title, scrawl } = crawlingText
  return (
    <div className="fade">
    <section className="star-wars">
      <div className="crawl">
        <div className="title">
          <p>{episode}</p>
          <h1>{title}</h1>
        </div>
        <p>{scrawl}</p>     
      </div>
    </section>
    </div>
  )
}
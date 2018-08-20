import React from 'react';
import PropTypes from 'prop-types';

 const Welcome = ( { crawlingText }) => {
  const { episode, title, scrawl } = crawlingText
  return (
    <section className="star-wars">
      <div className="scrawl">
        <div className="title">
          <p>{episode}</p>
          <h1>{title}</h1>
        </div>
        <p>{scrawl}</p>     
      </div>
    </section>
  )
}

Welcome.propTypes = {
  crawlingText: PropTypes.object
};

export default Welcome;
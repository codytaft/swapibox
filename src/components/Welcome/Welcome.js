import React from 'react'

 export const Welcome = ( { crawlingText }) => {
  console.log(crawlingText.title)
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
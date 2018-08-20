import React from './react'

const Welcome = ( { title, episode, scrawl}) => {
  return (
    <section class="star-wars">
      <div class="scrawl">
        <div class="title">
          <p>{episode}</p>
          <h1>{title}</h1>
        </div>
        <p>{scrawl}</p>     
      </div>
    </section>

  )
}
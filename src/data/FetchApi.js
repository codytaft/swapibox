import React from 'react';
import App from '../components/App/App.js'
import { getOpeningScrawl, cleanHomeworld, cleanSpecies } from '../components/Helper/Helper.js'

export const fetchScrawl = async () => {
  const randomNumber = Math.floor(Math.random() * 6 + 1)
  let resolvedScrawl
  try {
    const response = await fetch(`https://swapi.co/api/films/${randomNumber}/`)
    const data = await response.json()
    return resolvedScrawl = await getOpeningScrawl(data)

  } catch (error) {

  }
  // return resolvedScrawl
}

//  export const fetchNameData = async(category) => {
//    const response = await fetch(`https://swapi.co/api/people/`)
//    const data = response.json()
//    const peopleData =  await cleanHomeworld(data.results)
//    const species = await cleanSpecies(peopleData)

//      .catch((error) => console.log(error.message))
//  }

import React from 'react';
import App  from '../components/App/App.js'
import { getOpeningScrawl } from '../components/Helper/Helper.js'

export const fetchScrawl = async () => {
  const randomNumber = Math.floor(Math.random() * 6 + 1)
  let resolvedScrawl
  try {
    const response = await fetch(`https://swapi.co/api/films/${randomNumber}/`)
    const data = await response.json()
    resolvedScrawl = await getOpeningScrawl(data)

  } catch (error) {
    
  }
  return resolvedScrawl
}

 export const fetchNameData = async(category) => {
   fetch(`https://swapi.co/api/people/`)
     .then(response => response.json())
     .then(data => this.state.cleanData.cleanHomeworld(data.results))
     .then(peopleData => this.state.cleanData.cleanSpecies(peopleData))
     .then(species => this.setState({
       data: species
     }))
     .catch((error) => console.log(error.message))
 }
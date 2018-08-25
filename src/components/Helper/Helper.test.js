import React from 'react'
import {cleanHomeworld, cleanPlanetData} from './Helper'
import { shallow } from 'enzyme'
import {films} from '../../data/MockData.js'

describe('cleanHomeWorld', () => {

  it.only('should take in the correct data', () => {
    let expected = {
      title: films.title,
      episode: films.episode,
      scrawl: films.scrawl
    }
    getOpeningScrawl(films)
    expect(getOpeningScrawl).toEqual(expected)
  })
})
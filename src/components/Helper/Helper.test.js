import React from 'react'
import {cleanHomeworld, cleanPlanetData, getOpeningScrawl} from './Helper'
import { shallow } from 'enzyme'
import {films} from '../../data/MockData.js'

describe('getOpeningScrawl', () => {

  it.only('should return the correct data', () => {
    let expected = {
      title: films.title,
      episode: films.episode_id,
      scrawl: films.opening_crawl
    }
    expect(getOpeningScrawl(films)).toEqual(expected)
  })
})


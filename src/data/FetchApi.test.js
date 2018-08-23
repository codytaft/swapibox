import React from 'react';
import { fetchScrawl } from './FetchApi';
import { shallow } from 'enzyme';
import { getOpeningScrawl } from '../components/Helper/Helper.js';
import { MockData } from './MockData';

describe('FetchApi functions', () => {
  describe('fetchScrawl', () => {
    let mockCards
    let mockEvent
    let mockGetOpeningScrawl;
    let mockCard

    beforeEach(() => {
      mockEvent = { preventDefault: jest.fn() };
      mockCards = [
        {
          Homeworld: "Tatooine",
          Population: "200000",
          Species: "Human",
          isFavoriteSelected: false,
          name: "Luke Skywalker"
        },
        {
          Homeworld: "Tatooine",
          Population: "200000",
          Species: "Droid",
          isFavoriteSelected: false,
          name: "C-3PO"
        }
      ];
      mockGetOpeningScrawl = jest.fn();
      mockCard = {
        Homeworld: "Tatooine",
        Population: "200000",
        Species: "Human",
        isFavoriteSelected: false,
        name: "Luke Skywalker"
      };
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(MockData.opening_crawl)
      }));
    });

    it('Should invoke fetch with the correct params', async () => {
      const expected = 'https://swapi.co/api/films/1/'
      await fetchScrawl('https://swapi.co/api/films/1/')

      expect(window.fetch).toHaveBeenCalledWith(expected)
    })

    it('Should ')
  })
})
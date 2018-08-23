import React from 'react';
import { fetchScrawl, fetchNameData } from './FetchApi';
import { shallow } from 'enzyme';
import { getOpeningScrawl, cleanHomeworld, cleanSpecies } from '../components/Helper/Helper.js';
import { MockData } from './MockData';

describe('FetchApi functions', () => {
  describe('fetchScrawl', () => {
    let mockCards
    let mockEvent
    let mockGetOpeningScrawl;
    let mockCard

    beforeEach(() => {
      mockEvent = { preventDefault: jest.fn() };
      mockGetOpeningScrawl = jest.fn();
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(MockData.opening_crawl)
      }));
    });

    it('Should invoke fetch with the correct params', async () => {
      const expected = 'https://swapi.co/api/films/1/'
      const url = `https://swapi.co/api/films/1/`
      fetchScrawl()

      expect(window.fetch).toHaveBeenCalledWith(expected)
    });

    it('Should return correct object if status code is ok', async () => {

    });

    it.skip('Should throw an error if status code is not ok', async () => {
      window.fetch = jest.fn().mockImplementationOnce(() => Promise.reject(new Error('Error fetching scrawl')));


      await expect(fetchScrawl()).rejects.toEqual(new Error('Error fetching scrawl'))
    });
  });

  describe('fetchNameData', () => {
    let mockEvent
    let mockData
    let cleanHomeworld
    let cleanSpecies
    beforeEach(() => {
      mockEvent = { preventDefault: jest.fn() };
      mockData = MockData.people.results
      cleanHomeworld = jest.fn()
      cleanSpecies = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve([])
      }))
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve([])
      }))
    })

    it('Should invoke fetch with the correct params', () => {
      const expected = `https://swapi.co/api/people/`

      fetchNameData();

      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it.only('Should return correct object if status code is ok', async () => {
      await fetchNameData()
      
      
      await expect(cleanHomeworld).toHaveBeenCalled()
    });

    it('Should throw an error if status code is not ok', async () => {

    });
  })
})
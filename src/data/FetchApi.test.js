import React from 'react';
import { fetchScrawl, fetchPeopleData, fetchVehicleData } from './FetchApi';
import { shallow } from 'enzyme';
import { getOpeningScrawl, cleanPeopleData, cleanSpecies } from '../components/Helper/Helper.js';
import { MockData, films, vehicles } from './MockData';

describe('FetchApi functions', () => {
  describe('fetchScrawl', () => {
    let mockCards
    let mockEvent
    let mockGetOpeningScrawl
    let mockCard

    beforeEach(() => {
      mockEvent = { preventDefault: jest.fn() };
      mockGetOpeningScrawl = jest.fn();
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(MockData.opening_crawl)
      }));
    });

    it('Should invoke fetch with the correct params', async () => {
      const expected = 'https://swapi.co/api/films/1/'
      const url = `https://swapi.co/api/films/1/`
      fetchScrawl(url)

      expect(window.fetch).toHaveBeenCalledWith(expected)
    });

  it.skip('Should invoke fetch with the correct params', async () => {
    const expected = 'https://swapi.co/api/films/1/'
    const url = `https://swapi.co/api/films/1/`
    fetchScrawl(url)
    expect(window.fetch).toHaveBeenCalledWith(expected)
  });

  it('Should return correct object if status code is ok', async () => {

  });

  it('Should throw an error if status code is not ok', async () => {
    window.fetch = jest.fn().mockImplementationOnce(() => Promise.reject(new Error('Error fetching scrawl')));

    await expect(fetchScrawl()).rejects.toEqual(new Error('Error fetching scrawl'))
  });
});

describe('fetchPeopleData', () => {
  let mockEvent
  let cleanPeopleData
  beforeEach(() => {
    cleanPeopleData = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(MockData.people)
    }))
  })

  it('Should invoke fetch with the correct params', () => {
    const url = `https://swapi.co/api/people/`
    fetchPeopleData();
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('Should return promise', async () => {
    const expected = `https://swapi.co/api/people/`

    await expect(window.fetch).toEqual(MockData.people)
  });

  it('Should throw an error if status code is not ok', async () => {

  });
})

describe('fetchVehicleData', () => {
  let cleanPeopleData
  let cleanVehicles
  beforeEach(() => {
    const mockData = MockData.people.results
    cleanVehicles = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(vehicles)
    }))
  });

  it('Should invoke fetch with correct parameters', () => {
    const url = `https://swapi.co/api/vehicles/`
    fetchVehicleData()
    expect(window.fetch).toHaveBeenCalledWith(url)
  });

  it('Should invoke cleanVehicles with correctParameters', async () => {
    await fetchVehicleData()
    expect(cleanVehicles).toHaveBeenCalledWith(vehicles)
  });
})
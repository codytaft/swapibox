import React from 'react';
import { fetchScrawl, fetchPeopleData, fetchVehicleData } from './FetchApi';
import { shallow } from 'enzyme';
import { getOpeningScrawl, cleanPeopleData, cleanSpecies } from '../components/Helper/Helper.js';
import { MockData, films, vehicles } from './MockData';

describe('fetchScrawl', () => {

  it.skip('Should invoke fetch with the correct params', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(films)
    }))
    const expected = 'https://swapi.co/api/films/1/'
    const url = `https://swapi.co/api/films/1/`
    fetchScrawl(url)
    expect(window.fetch).toHaveBeenCalledWith(expected)
  })
});


describe('fetchPeopleData', () => {

  beforeEach(() => {
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
    await expect(fetchPeopleData()).toEqual(MockData.people)
  });
})

describe('fetchVehicleData', () => {
  it('Should invoke fetch with correct parameters', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(vehicles)
    }))

    const url = `https://swapi.co/api/vehicles/`

    fetchVehicleData()
    expect(window.fetch).toHaveBeenCalledWith(url)
  });
})
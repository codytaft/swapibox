import React from 'react';
import { fetchScrawl, fetchPeopleData, fetchVehicleData, fetchResidents } from './FetchApi';
import { shallow } from 'enzyme';
import { getOpeningScrawl, cleanPeopleData, cleanSpecies, cleanVehicles } from '../components/Helper/Helper.js';
import { MockData, mockFilms, mockVehicles, mockResidentLinks, mockResidentNames } from './MockData';
// jest.mock('./FetchApi.js')

describe('fetchScrawl', () => {

  it.skip('Should invoke fetch with the correct params', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockFilms)
    }))
    const expected = 'https://swapi.co/api/films/1/'
    const url = `https://swapi.co/api/films/1/`
    fetchScrawl(url)
    expect(window.fetch).toHaveBeenCalledWith(expected)
  })
});

describe('fetchPeopleData', () => {

  it('Should invoke fetch with the correct params', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(MockData.people)
    }))
    const url = `https://swapi.co/api/people/`
    fetchPeopleData();
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('Should return an object', async () => {
    const result = await fetchPeopleData()
    expect(result).toEqual(MockData.people)
  });
})

describe('fetchResidents', () => {

  it('Should return an array', async () => {
    const result = await fetchResidents(mockResidentLinks)
    expect(result).toEqual(mockResidentNames)
  });
})

describe('fetchVehicleData', () => {

  it('Should invoke fetch with correct parameters', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockVehicles)
    }))
    const url = `https://swapi.co/api/vehicles/`
    fetchVehicleData()
    expect(window.fetch).toHaveBeenCalledWith(url)
  });

  it('Should return an object of vehicle data', async () => {
    const expected = await cleanVehicles(mockVehicles)
    const result = await fetchVehicleData()
    expect(result).toEqual(expected)
  })
})
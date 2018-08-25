import React from 'react';
import { fetchScrawl, fetchPeopleData, fetchVehicleData } from './FetchApi';
import { shallow } from 'enzyme';
import { getOpeningScrawl, cleanPeopleData, cleanSpecies, cleanVehicles } from '../components/Helper/Helper.js';
import { MockData, films, vehicles } from './MockData';
// jest.mock('./FetchApi.js')

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
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({})
    }))
  })
}

describe('fetchVehicleData', () => {

  it('Should invoke fetch with correct parameters', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(vehicles)
    }))
    const url = `https://swapi.co/api/vehicles/`
    fetchVehicleData()
    expect(window.fetch).toHaveBeenCalledWith(url)
  });

  it('Should return an object of vehicle data', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(vehicles)
    }))
    const expected = await cleanVehicles(vehicles)
    const result = await fetchVehicleData()
    expect(result).toEqual(expected)
  })
})
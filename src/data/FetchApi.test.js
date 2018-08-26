import React from 'react';
import { fetchScrawl, 
        fetchPeopleData, 
        fetchVehicleData, 
        fetchResidents, 
        fetchPlanetData,
        fetchSpecies, 
        fetchHomeWorld} from './FetchApi';
import { shallow } from 'enzyme';
import { cleanVehicles } from '../components/Helper/Helper.js';
import { MockData, 
        mockFilms, 
        mockVehicles, 
        mockResidentLinks, 
        mockResidentNames,
        mockPlanets, } 
        from './MockData';

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

describe('fetchHomeWorld', () => {
  it('Should invoke fetch with the correct params', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockPlanets)
    }))
    fetchHomeWorld(mockPlanets)
    expect(window.fetch).toHaveBeenCalledWith(mockPlanets)
  })

  it('Should return homeworld name as a string', async () => {
    const result = await fetchHomeWorld(mockPlanets)
    expect(result).toEqual(mockPlanets.name)
  })
})

// describe('fetchResidents', () => {

//   it('Should return an array', async () => {
//     const result = await fetchResidents(mockResidentLinks)
//     expect(result).toEqual(mockResidentNames)
//   });
// })

describe('fetchPlanetData', () => {
  it('should invoke fetch with correct parameters', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockPlanets)
    }))

    const url = 'https://swapi.co/api/planets/'
    fetchPlanetData()
    expect(window.fetch).toHaveBeenCalledWith(url)
  })
  it('Should retun an object of planet data', async () => {
    const result = await fetchPlanetData()
    expect(result).toEqual(mockPlanets)
  })
})

describe('fetchSpecies', () => {
  it('should invoke fetch with the correct parameters', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(MockData.people)
    }))
    fetchSpecies(MockData.people)
    expect(window.fetch).toHaveBeenCalledWith(MockData.people)
  })
  it('Should return species name in a string', async() => {
    const result = await fetchSpecies(MockData.people)
    expect(result).toEqual(MockData.people.name)
  })
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
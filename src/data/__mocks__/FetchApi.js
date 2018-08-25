import { appMockData, appMockPlanet, appMockVehicle, appMockPeople, appMockHomeworld, appMockSpecies } 
from '../../components/App/appMockData.js';
import { MockData, films } from '../MockData';

export const fetchScrawl = jest.fn().mockImplementation(() => (
  films
));

export const fetchPeopleData = jest.fn().mockImplementation(() => (
  appMockPeople
))

export const fetchHomeWorld = jest.fn().mockImplementation(() => (
  appMockHomeworld
));

export const fetchPopulation = jest.fn().mockImplementation(() => (
  appMockHomeworld
));

export const fetchSpecies = jest.fn().mockImplementation(() => (
  appMockSpecies
));

export const fetchVehicleData = jest.fn().mockImplementation(() => (
  appMockVehicle
));



// export const cleanPeopleData = jest.fn().mockImplementation(() => (
//   appMockData
// ))

export const fetchPlanetData = jest.fn().mockImplementationOnce(() => ({
  planetData: [{
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
    },
  ],
}))
.mockImplementationOnce(() => ({
  planetData: [{
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
    },
  ],
}))
.mockImplementationOnce(() => {
  errorStatus: 'Error fetching planetData'
})


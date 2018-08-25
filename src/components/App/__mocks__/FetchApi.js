import { appMockData, appMockPlanet, appMockVehicle, appMockPeople } from './appMockData';

export const fetchPeopleData = jest.fn().mockImplementation(() => ({
  peopleData: appMockPeople
}))

export const fetchHomeWorld = jest.fn().mockImplementation(() => ({
  homeworld: appMockData
}))
export const fetchPopulation = jest.fn().mockImplementation(() => ({

}))
export const fetchSpecies = jest.fn().mockImplementation(() => ({

}))

export const cleanPeopleData = jest.fn().mockImplementation(() => ({
<<<<<<< HEAD
  enresolvedPeopleData: [

  ]
=======
  unresolvedPeopleData: appMockData
>>>>>>> Pass test getpeopledata updates state when invoked
}))

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


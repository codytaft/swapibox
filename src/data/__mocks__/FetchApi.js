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
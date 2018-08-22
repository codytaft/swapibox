
export const getOpeningScrawl = (data) => {
  const openingScrawl = {
    title: data.title,
    episode: data.episode_id,
    scrawl: data.opening_crawl
  }
  return openingScrawl
}

export const cleanHomeworld = (peopleData) => {
  let wholePeople;
  const unresolvedPeopleData = peopleData.results.map(async person => {
    const name = person.name;

    const response = await person.homeworld;
    console.log(response);
    const homeWorld = await response.json();
    return wholePeople = {
      ...person,
      name,
      Homeworld: homeWorld.name,
      Population: homeWorld.population
    }
  })
  return Promise.all(unresolvedPeopleData)
}

export const cleanSpecies = (peopleData) => {
  const unresolvedSpeciesData = peopleData.map(person => {
    const { name, Homeworld, Population } = person;

    return fetch(person.species)
      .then(response => response.json())
      .then(species => ({
        name,
        Homeworld,
        Population,
        Species: species.name,
        isFavoriteSelected: false
      }))
  })
  return Promise.all(unresolvedSpeciesData);
}


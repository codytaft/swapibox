import {
  fetchHomeWorld,
  fetchPopulation,
  fetchSpecies,
  fetchVehicleData
} from '../../data/FetchApi';

export const getOpeningScrawl = data => {
  const openingScrawl = {
    title: data.title,
    episode: data.episode_id,
    scrawl: data.opening_crawl
  };
  return openingScrawl;
};

export const cleanHomeworld = peopleData => {
  let wholePeople;
  const unresolvedPeopleData = peopleData.results.map(async person => {
    const name = person.name;

    const response = await person.homeworld;
    const homeWorld = await fetchHomeWorld(response);
    const population = await fetchPopulation(response);
    const species = await fetchSpecies(person.species);
    return (wholePeople = {
      ...person,
      name,
      Homeworld: homeWorld,
      Population: population,
      Species: species
    });
  });
  return Promise.all(unresolvedPeopleData);
};

export const cleanSpecies = peopleData => {
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
      }));
  });
  return Promise.all(unresolvedSpeciesData);
};

export const cleanVehicles = vehicleData => {
  const unresolvedVehicleData = vehicleData.results.map(vehicle => {
    let newVehicle;
    const { name, model, vehicle_class, passengers } = vehicle;
    return (newVehicle = {
      name, model, vehicle_class, passengers
    })

  });
  console.log(unresolvedVehicleData);
  return Promise.all(unresolvedVehicleData);
};

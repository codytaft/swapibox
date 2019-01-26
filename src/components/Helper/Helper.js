import {
  fetchHomeWorld,
  fetchPopulation,
  fetchSpecies,
  fetchResidents
} from '../../data/FetchApi';

export const getOpeningScrawl = async data => {
  const openingScrawl = {
    title: data.title,
    episode: data.episode_id,
    scrawl: data.opening_crawl
  };
  return await openingScrawl;
};

export const cleanPeopleData = peopleData => {
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
      stats: {
        Homeworld: homeWorld,
        Population: population,
        Species: species
      }
    });
  });
  return Promise.all(unresolvedPeopleData);
};

export const cleanPlanetData = async (planetData) => {
  let cleanPlanet;
  const unresolvedPlanetData = planetData.results.map(async planet => {
    const name = planet.name;
    const terrain = await planet.terrain;
    const population = await planet.population;
    const climate = await planet.climate;
    const residentLinks = await planet.residents;
    const residents = await fetchResidents(residentLinks);
    return cleanPlanet = {
      name,
      stats: {
        Terrain: terrain,
        Population: population,
        Climate: climate,
        Residents: residents
      }
    };
  });
  return Promise.all(unresolvedPlanetData);
};

export const cleanVehicles = vehicleData => {
  const unresolvedVehicleData = vehicleData.results.map(vehicle => {
    let newVehicle;
    console.log(vehicle)
    const { name, model, vehicle_class, passengers } = vehicle;
    return (newVehicle = {
      name,
      stats: {
        Model: model,
        Class: vehicle_class,
        Passengers: passengers
      }
    });
  });
  return Promise.all(unresolvedVehicleData);
};

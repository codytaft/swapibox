import App from '../components/App/App.js';
import { getOpeningScrawl, cleanPeopleData, cleanSpecies, cleanVehicles, cleanPlanetData } from '../components/Helper/Helper.js';

export const fetchScrawl = async () => {
  const randomNumber = Math.floor(Math.random() * 6 + 1);
  let resolvedScrawl;
    const response = await fetch(`https://swapi.co/api/films/${randomNumber}/`);
    const data = await response.json();
    return (resolvedScrawl = await getOpeningScrawl(data));
};

export const fetchPeopleData = async () => {
  let peopleData;
    const response = await fetch(`https://swapi.co/api/people/`)
    return peopleData = await response.json()
};

export const fetchHomeWorld = async planet => {
  let homeworld;
    const response = await fetch(planet);
    const data = await response.json();
    return (homeworld = await data.name);
};

export const fetchPopulation = async planet => {
  let population;
    const response = await fetch(planet);
    const data = await response.json();
    return (population = await data.population);
};

export const fetchSpecies = async peopleData => {
  let species;
    const response = await fetch(peopleData);
    const data = await response.json();
    return (species = await data.name);
};

export const fetchPlanetData = async () => {
  let planetData
    const response = await fetch('https://swapi.co/api/planets/')
    return planetData = await response.json()
};

export const fetchResidents = async (residentLinks) => {
  let fetchPlanetResidents = []
  await residentLinks.reduce(async (residentNames, resident) => {
    const response = await fetch(resident)
    const residentList = await response.json()
    const residentName = await residentList.name
    residentNames = residentName
    fetchPlanetResidents.push(residentName)
    return residentNames
  }, '')
  return fetchPlanetResidents
};

export const fetchVehicleData = async () => {
    const response = await fetch(`https://swapi.co/api/vehicles/`);
    const data = await response.json();
    const vehicleData = await cleanVehicles(data);
    return vehicleData;
};
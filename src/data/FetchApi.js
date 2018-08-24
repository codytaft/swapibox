import { getOpeningScrawl, cleanHomeworld, cleanSpecies, cleanVehicles } from '../components/Helper/Helper.js';

export const fetchScrawl = async () => {
  const randomNumber = Math.floor(Math.random() * 6 + 1);
  let resolvedScrawl;
  try {
    const response = await fetch(`https://swapi.co/api/films/${randomNumber}/`);
    const data = await response.json();
    return (resolvedScrawl = await getOpeningScrawl(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchNameData = async category => {
  let species;
  try {
    const response = await fetch(`https://swapi.co/api/people/`);
    const data = await response.json();
    const peopleData = await cleanHomeworld(data);
    return (species = await cleanSpecies(peopleData));
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchHomeWorld = async planet => {
  let homeworld;
  try {
    const response = await fetch(planet);
    const data = await response.json();
    return (homeworld = await data.name);
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchPopulation = async planet => {
  let population;
  try {
    const response = await fetch(planet);
    const data = await response.json();
    return (population = await data.population);
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchSpecies = async peopleData => {
  let species;
  try {
    const response = await fetch(peopleData);
    const data = await response.json();
    return (species = await data.name);
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchVehicleData = async category => {
  let vehicles;
  try {
    const response = await fetch(`https://swapi.co/api/vehicles/`);
    const data = await response.json();
    const vehicleData = await cleanVehicles(data);
    return vehicleData;
  } catch (error) {
    console.log(error.message);
  }
};

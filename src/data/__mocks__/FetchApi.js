import { appMockData, appMockPlanet, appMockVehicle, appMockPeople, appMockHomeworld, appMockSpecies, appMockResidents } 
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

export const fetchPlanetData = jest.fn().mockImplementation(() => (
  appMockPlanet
));

export const fetchResidents = jest.fn().mockImplementation(() => (
  appMockResidents
));






import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { appMockData, appMockVehicle, appMockPeople, expectedAppMock } from './appMockData';
import { films } from '../../data/MockData';

jest.mock('../../data/FetchApi');

describe('APP', () => {
  let wrapper;
  let mockData;
  let mockRemoveFavorite;

  beforeEach(() => {
    wrapper = shallow(<App removeFavorite={mockRemoveFavorite} />);
    mockData = {};
    mockRemoveFavorite = jest.fn();
  });

  it('Should match snapshot', () => {

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Should start state crawlingText empty object and data empty array', () => {
    expect(wrapper.state().peopleData.length).toEqual(0);
    expect(wrapper.state().crawlingText).toEqual({});
  });

  it('Should update state of crawlingText when playOpeningScrawl is invoked', async () => {
    await wrapper.instance().playOpeningScrawl();

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.state().peopleData.length).toEqual(0);
    expect(wrapper.state().crawlingText).toEqual(films);
  });

  describe('componentDidMount', () => {
    it('Should set the state crawlingText with componentDidMount', async () => {
      await wrapper.update();

      expect(wrapper.state().crawlingText).toEqual(mockData);
    });
  });

  describe.skip('getPeopleData', () => {
    it('Should update state when invoked', async () => {
<<<<<<< HEAD
      const expected = expectedAppMock;

      await wrapper.instance().getPeopleData();

      expect(wrapper.state().favoritesDisplaying).toEqual(false);
      expect(wrapper.state().peopleData).toEqual(expected);
    });

    it('Should invoke setDisplayData when invoked', async () => {
      const mockSetDisplayData = jest.fn();
      wrapper = shallow(
        <App
          setDisplayData={mockSetDisplayData}
          peopleData={appMockPeople}
        />
      );
      const spy = spyOn(wrapper.instance(), 'getPeopleData');
      wrapper.instance().forceUpdate();
=======
      // const mockSetDisplayData = jest.fn();
      // wrapper = await shallow(<App setDisplayData={mockSetDisplayData} />);
      // window.fetch = jest.fn().mockImplementation(() => ({
      //   json: () => Promise.resolve(appMockPeople)
      // }));
      const expected = appMockVehicle;
>>>>>>> Button class renders on click

      await wrapper.instance().getPeopleData();

      expect(wrapper.state().favoritesDisplaying).toEqual(false);
      expect(wrapper.state().peopleData).toEqual(expected);
      // await expect(mockSetDisplayData).toHaveBeenCalled()
    });
<<<<<<< HEAD

    it('Should invoke setDisplayData and setState when there is peopleData', async () => {
      const mockSetDisplayData = jest.fn();
      wrapper = shallow(
        <App setDisplayData={mockSetDisplayData} />);
      wrapper.setState({ peopleData: appMockData });
      const spy = spyOn(wrapper.instance(), 'getPeopleData');
      wrapper.instance().forceUpdate();

      await wrapper.instance().getPeopleData();

      expect(spy).toHaveBeenCalled();
      await expect(wrapper.state().favoritesDisplaying).toEqual(false);
    });
=======
>>>>>>> Button class renders on click
  });

  describe('getVehicleData', () => {
    it('Should set state when invoked', async () => {
      const mockSetDisplayData = jest.fn();
      wrapper = shallow(<App setDisplayData={mockSetDisplayData} />);
<<<<<<< HEAD
      wrapper.setState({ vehicleData: appMockVehicle });
=======

>>>>>>> Button class renders on click
      const expected = appMockVehicle;
      await wrapper.instance().getVehicleData();

      // expect(mockSetDisplayData).toHaveBeenCalled()
      expect(wrapper.state().vehicleData).toEqual(expected);
<<<<<<< HEAD
      expect(wrapper.state().displayData).toEqual(appMockVehicle);
      expect(wrapper.state().favoritesDisplaying).toEqual(false);
    });

    it('Should invoke setDisplayData and setState when vehicleData', async () => {
      const mockSetDisplayData = jest.fn();
      wrapper = shallow(
        <App
          setDisplayData={mockSetDisplayData}
          vehicleData={appMockVehicle}
        />
      );
      const spy = spyOn(wrapper.instance(), 'getVehicleData');
      wrapper.instance().forceUpdate();

      await wrapper.instance().getVehicleData();

      expect(spy).toHaveBeenCalled();
      expect(wrapper.state().favoritesDisplaying).toEqual(false);
    });
=======
    });
>>>>>>> Button class renders on click
  });

  describe('getPlanetData', () => {
    it('Should set the state planetData when invoked', async () => {
<<<<<<< HEAD
      await wrapper.instance().getPlanetData();

      expect(wrapper.state().planetData).toEqual([]);
=======
      // window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      //   json: () => Promise.resolve(appMockPlanet)
      // }));
      // const expected = await cleanPlanetData(appMockData)
      const expected = appMockPlanet;
      await wrapper.instance().getPlanetData();

      expect(wrapper.state().planetData).toEqual(appMockData);
>>>>>>> Button class renders on click
      expect(wrapper.state().favoritesDisplaying).toEqual(false);
    });
  });

  describe('setDisplayData', () => {
    it('Should setState when invoked', () => {
      mockData = appMockData;
      wrapper.instance().setDisplayData(mockData);

      expect(wrapper.state().displayData.length).toEqual(1);
      expect(wrapper.state().displayData).toEqual(mockData);
    });
  });

  describe('selectFavorite', () => {
    let mockData;

    beforeEach(() => {
      mockData = appMockData;
    });

    it('Should update state when invoked', () => {
      expect(wrapper.state().favorites.length).toEqual(0);
      expect(wrapper.state().favoriteCount).toEqual(0);

      wrapper.setState({ displayData: mockData });
      wrapper.instance().selectFavorite("Luke Skywalker");

      expect(wrapper.state().favorites.length).toEqual(1);
      expect(wrapper.state().favoriteCount).toEqual(1);
    });
    it('Should update state when card is selected twice', () => {
      wrapper.setState({ displayData: mockData });
      wrapper.setState({ favoritesDisplaying: true });
      wrapper.instance().selectFavorite("Luke Skywalker");

      expect(wrapper.state().favorites.length).toEqual(1);
      expect(wrapper.state().favoriteCount).toEqual(1);

      wrapper.instance().selectFavorite("Luke Skywalker");

      expect(wrapper.state().favorites.length).toEqual(0);
      expect(wrapper.state().favoriteCount).toEqual(0);
    });
  });


});
import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { appMockData } from './appMockData';
import CleanData from '../Helper/Helper';

describe('APP', () => {
  let mockEvent;
  let wrapper;
  let mockData;
  let mockRemoveFavorite;
  let mockFetchScrawl;

  beforeEach(() => {
    mockEvent = { preventDefault: jest.fn() };
    wrapper = shallow(<App removeFavorite={mockRemoveFavorite} />);
    mockData = {};
    mockFetchScrawl = jest.fn();
    mockRemoveFavorite = jest.fn();
  });

  it('Should match snapshot', () => {

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Should start state crawlingText empty object and data empty array', () => {
    expect(wrapper.state().peopleData.length).toEqual(0);
    expect(wrapper.state().crawlingText).toEqual({});
  });

  it('Should update state of crawlingText when playOpeningScrawl is invoked', () => {
    wrapper.instance().playOpeningScrawl();

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.state().peopleData.length).toEqual(0);
    expect(wrapper.state().crawlingText).toEqual(mockData);
  });

  describe('componentDidMount', () => {
    it('Should set the state crawlingText with componentDidMount', async () => {
      const mockPlayOpeningScrawl = jest.fn();
      wrapper = await shallow(<App playOpeningScrawl={mockPlayOpeningScrawl} />);
      await wrapper.update();

      expect(wrapper.state().crawlingText).toEqual(mockData);
    });
  });

  describe('getPlanetData', () => {
    it('Should setState when invoked', async () => {
      // await wrapper.instance().getPlanetData(appMockData);

      await expect(wrapper.state().planetData).toEqual(appMockData);
    })
  });

  describe('setDisplayData', () => {
    it('Should setState when invoked', () => {
      mockData = appMockData;
      wrapper.instance().setDisplayData(mockData)

      expect(wrapper.state().displayData.length).toEqual(2)
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
      
      wrapper.setState({displayData: mockData})
      wrapper.instance().selectFavorite("Luke Skywalker");

      expect(wrapper.state().favorites.length).toEqual(1);
      expect(wrapper.state().favoriteCount).toEqual(1);
    });
    it('Should update state when card is selected twice', () => {
      wrapper.setState({displayData: mockData})
      wrapper.setState({favoritesDisplaying: true})
      wrapper.instance().selectFavorite("Luke Skywalker");
      
      expect(wrapper.state().favorites.length).toEqual(1);
      expect(wrapper.state().favoriteCount).toEqual(1);

      wrapper.instance().selectFavorite("Luke Skywalker");
      
      expect(wrapper.state().favorites.length).toEqual(0);
      expect(wrapper.state().favoriteCount).toEqual(0);
    });
  });


});
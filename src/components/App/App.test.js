import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { MockData } from '../../data/MockData';
import CleanData from '../Helper/Helper';

describe('APP', () => {
  let wrapper;
  let mockData;

  beforeEach(() => {
    wrapper = shallow(<App />);
    mockData = {}
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
    expect(wrapper.state().data.length).toEqual(0);
    expect(wrapper.state().crawlingText).toEqual(mockData);
  });
});
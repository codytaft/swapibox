import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('APP', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Should match snapshot', () => {

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Should start state crawlingText empty object and data empty array', () => {
    expect(wrapper.state().data.length).toEqual(0);
    expect(wrapper.state().crawlingText).toEqual({});
  })
})
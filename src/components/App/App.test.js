import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('APP', () => {
  it('Should match snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.html()).toMatchSnapshot()
  })
})
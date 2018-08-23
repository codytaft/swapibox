import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './Welcome.js';

describe('WELCOME', () => {
  it('Should match snapshot', () =>{
    const wrapper = shallow(<Welcome crawlingText={{}} />);

    expect(wrapper.html()).toMatchSnapshot();
  });
});


import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../Card/Card';
import { mockCardData } from '../app/appMockData';

describe('Card', () => {
  let wrapper;
  let selectFavorite = jest.fn();
  let mockFavorites = [];

  beforeEach(() => {
    wrapper = shallow(<Card displayData={mockCardData} selectFavorite={selectFavorite} favorites={mockFavorites} />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


  it('should render a card', () => {
    const result= wrapper.find('.card').length;
    expect(result).toEqual(1)
  });
});
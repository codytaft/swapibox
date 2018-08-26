<<<<<<< HEAD
import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../Card/Card';
import { appMockData } from '../app/appMockData';



describe('Card', () => {
  let wrapper;
  let mockPeople = appMockData;
  let selectFavorite = jest.fn();
  let mockFavorites = [];
  let mockButtonClass = cardbtn;


  it('should match the snapshot', () => {

    wrapper = shallow(<Card displayData={mockPeople} selectFavorite={selectFavorite} favorites={mockFavorites} />);

    expect(wrapper).toMatchSnapshot();

  });


  it('should display the card catergory with the corresponding data', () => {
    // wrapper = mount(<Card displayData={mockDisplayData} selectFavorite={selectFavorite} mockFavorites={mockFavorites} />);
    // console.log(wrapper.results.length);
  })
=======
import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Card/Card';
import Card from '../Card/Card';

describe('Card', () => {
  let wrapper;
  let displayData = jest.fn();
  let selectFavorite = jest.fn();
  let mockFavorites = []

  it('should match the snapshot', () => {
    wrapper = <Card displayData={displayData} selectFavorite={selectFavorite} mockFavorites={mockFavorites} />
    expect(wrapper).toMatchSnapshot();
  });
>>>>>>> Add Card snapshot test
})
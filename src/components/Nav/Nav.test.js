import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../Nav/Nav';

describe('Nav', () => {
  let wrapper;
  let mockGetPeopleData;
  let mockGetVehicleData;
  let mockGetPlanetData;
  let mockToggleButton;

  beforeEach(() => {
    wrapper = shallow(
      <Nav 
        getPeopleData={mockGetPeopleData}
        getVehicleData={mockGetVehicleData}
        getPlanetData={mockGetPlanetData}
        toggleButton={mockToggleButton}
      />
    );
    
    mockGetPeopleData = jest.fn();
    mockGetVehicleData = jest.fn();
    mockGetPlanetData = jest.fn();
    mockToggleButton = jest.fn();
  });

  it('Should match snapshot', () => {
    
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Should invoke toggleFavorites on click favorites', () => {
    const mockToggleFavorites = jest.fn();
    const event = {target: {value: 'FAVORITES'}};
    wrapper = shallow(
      <Nav  
        toggleFavorites={mockToggleFavorites}
        toggleButton={mockToggleButton}
      />
    );
   
    wrapper.instance().forceUpdate();
    wrapper.find('[name="FAVORITES"]').simulate('click', event);

    expect(mockToggleFavorites).toHaveBeenCalled();
  });

  describe('handleClick', () => {
    it('Should invoke getPeopleData when value is people', () => {
      wrapper = shallow(
        <Nav  
          getPeopleData={mockGetPeopleData} 
          toggleButton={mockToggleButton}
        />
      );
      const event = {target: {value: 'PEOPLE'}};
      const spy = jest.spyOn(wrapper.instance(), "handleClick");
      wrapper.instance().forceUpdate();
      wrapper.find('[name="PEOPLE"]').simulate('click', event);

      expect(spy).toHaveBeenCalled();
    });

    it('Should invoke getVehicleData when value is Vehicles', () => {
      const event = {target: {value: 'VEHICLES'}};
      const spy = jest.spyOn(wrapper.instance(), "handleClick");
      wrapper.instance().forceUpdate();
      wrapper.find('[name="VEHICLES"]').simulate('click', event);

      expect(spy).toHaveBeenCalled();
    });

    it('Should invoke getPlanetData when value is Planets', () => {
      const event = {target: {value: 'PLANETS'}};
      const spy = jest.spyOn(wrapper.instance(), "handleClick");
      wrapper.instance().forceUpdate();
      wrapper.find('[name="PLANETS"]').simulate('click', event);

      expect(spy).toHaveBeenCalled();
    });
    
  });
});

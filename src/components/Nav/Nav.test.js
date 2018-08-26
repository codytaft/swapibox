import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../Nav/Nav';

describe('Nav', () => {
  let wrapper;
  let mockGetPeopleData;
  let mockGetVehicleData;
  let mockGetPlanetData;

  beforeEach(() => {
    wrapper = shallow(
      <Nav 
        getPeopleData={mockGetPeopleData}
        getVehicleData={mockGetVehicleData}
        getPlanetData={mockGetPlanetData}
      />
    );
    
    mockGetPeopleData = jest.fn();
    mockGetVehicleData = jest.fn();
    mockGetPlanetData = jest.fn();
  });

  it('Should match snapshot', () => {
    
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Should invoke toggleFavorites on click favorites', () => {
    const mockToggleFavorites = jest.fn();
    wrapper = shallow(<Nav toggleFavorites={mockToggleFavorites} />);
   
    wrapper.instance().forceUpdate();
    wrapper.find('[name="FAVORITES"]').simulate('click');

    expect(mockToggleFavorites).toHaveBeenCalled();
  });

  describe('handleClick', () => {
    it('Should invoke getPeopleData when value is people', () => {
      const event = {target: {value: 'People'}};
      const spy = jest.spyOn(wrapper.instance(), "handleClick");
      wrapper.instance().forceUpdate();
      wrapper.find('[name="People"]').simulate('click', event);

      expect(spy).toHaveBeenCalled();
    });

    it('Should invoke getVehicleData when value is Vehicles', () => {
      const event = {target: {value: 'Vehicles'}};
      const spy = jest.spyOn(wrapper.instance(), "handleClick");
      wrapper.instance().forceUpdate();
      wrapper.find('[name="Vehicles"]').simulate('click', event);

      expect(spy).toHaveBeenCalled();
    });

    it('Should invoke getPlanetData when value is Vehicles', () => {
      const event = {target: {value: 'Planets'}};
      const spy = jest.spyOn(wrapper.instance(), "handleClick");
      wrapper.instance().forceUpdate();
      wrapper.find('[name="Planets"]').simulate('click', event);

      expect(spy).toHaveBeenCalled();
    });
    
  });
});

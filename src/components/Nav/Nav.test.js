import React from 'react';
import { shallow, mount } from 'enzyme';
import Nav from '../Nav/Nav';
import Button from '../Button/Button';


describe('Nav', () => {
  let wrapper;
  let wrapperButton;
  let mockGetPeopleData;
  let mockGetVehicleData;
  let mockGetPlanetData;
  let mockHandleClick;

  beforeEach(() => {
    wrapper = shallow(
      <Nav 
        // handleClick={mockHandleClick} 
        getPeopleData={mockGetPeopleData}
        getVehicleData={mockGetVehicleData}
        getPlanetData={mockGetPlanetData}
      />
    );
    // wrapperButton = shallow(
    //   <Button 
    //     getPeopleData={mockGetPeopleData}
    //     getVehicleData={mockGetVehicleData}
    //     getPlanetData={mockGetPlanetData}
    //   />
    // );
    mockHandleClick = jest.fn();
    mockGetPeopleData = jest.fn();
    mockGetVehicleData = jest.fn();
    mockGetPlanetData = jest.fn();
  });

  it('Should match snapshot', () => {
    
    expect(wrapper.html()).toMatchSnapshot()
  });

  describe('handleClick', () => {
    it('Should invoke getPeopleData when value is people', () => {
      const event = {target: {value: 'People'}};
      const spy = jest.spyOn(wrapper.instance(), "handleClick");
      wrapper.instance().forceUpdate();
      wrapper.find('[name="People"]').simulate('click', event);

      expect(spy).toHaveBeenCalled();
    });
  });
});

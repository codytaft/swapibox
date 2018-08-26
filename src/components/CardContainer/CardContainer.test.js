import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';
import { expectedAppMock } from '../App/appMockData';
import { films } from '../../data/MockData';
import { getOpeningScrawl } from '../Helper/Helper';

describe('CardContainer', () => {
  it('Should match the snapshot when only crawlingText has length', () => {
    const crawlingText = getOpeningScrawl(films);
    const wrapper = shallow(
      <CardContainer 
        crawlingText={crawlingText} 
        displayData={[]}
        favorites={[]}
      />
    );
    
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Should match the snapshot when displayData has length', () => {
    const crawlingText = getOpeningScrawl(films);
    const wrapper = shallow(
      <CardContainer 
        crawlingText={ crawlingText } 
        displayData={ expectedAppMock }
        favorites={[]}
      />
    );

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Should match the snapshot when favorites is displaying and has no length', () => {
    const crawlingText = getOpeningScrawl(films);
    const wrapper = shallow(
      <CardContainer 
        crawlingText={ crawlingText } 
        displayData={ expectedAppMock }
        favorites={[]}
        favoritesDisplaying={true}
      />
    );

    expect(wrapper.html()).toMatchSnapshot();
  });
});
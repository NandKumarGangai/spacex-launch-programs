import preloadAll from 'jest-next-dynamic';
import React from 'react';
import { shallow } from 'enzyme';
import Filters from './index';

beforeAll(async () => {
  await preloadAll();
});

describe('Filters', () => {
  const component = shallow(<Filters />);

  it('Test to check component renders', () => {
    expect(component.exists()).toBeTruthy();
  });

  it('Test to check FilterOnYears component renders', () => {
    expect(component.find({ id: 'filterOnYears' })).toHaveLength(1);
  });

  it('Test to check FilterOnLaunch component renders', () => {
    expect(component.find({ id: 'filterOnLaunch' })).toHaveLength(1);
  });

  it('Test to check FilterOnLanding component renders', () => {
    expect(component.find({ id: 'filterOnLanding' })).toHaveLength(1);
  });
});

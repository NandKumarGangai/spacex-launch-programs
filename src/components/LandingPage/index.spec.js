import preloadAll from 'jest-next-dynamic';
import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './index';

beforeAll(async () => {
  await preloadAll();
});

describe('LandingPage', () => {
  const component = shallow(<LandingPage />);

  it('Test to check component renders', () => {
    expect(component.exists()).toBeTruthy();
  });

  it('Test to check Filters component renders', () => {
    expect(component.find({ id: 'filters' })).toHaveLength(1);
  });

  it('Test to check Filters component renders', () => {
    expect(component.find({ id: 'launchPrograms' })).toHaveLength(1);
  });
});

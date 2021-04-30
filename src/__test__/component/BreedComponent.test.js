import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

import { BreedComponent } from '../../containers/BreedComponent';

describe('<BreedComponent>', () => {
  const comp = mount(<BreedComponent />);
  test('Render <BreedComponent>', () => {
    expect(comp.length).toEqual(1);
  });
  test('Render Breed ', () => {
    expect(comp.find('.BreedData'));
  });
});

describe('<BreedComponent> snapshot', () => {
  const comp = create(<BreedComponent />);
  expect(comp.toJSON()).toMatchSnapshot();
});

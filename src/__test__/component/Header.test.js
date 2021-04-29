import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import Hero from '../../containers/Hero';

describe('<Hero>', () => {
  const hero = mount(<Hero />);
  test('Render <Hero>', () => {
    expect(hero.length).toEqual(1);
  });
  test('Render galery ', () => {
    expect(hero.find('.galery').text());
  });
});

describe('<Hero> snapshot', () => {
  const hero = create(<Hero />);
  expect(hero.toJSON()).toMatchSnapshot();
});

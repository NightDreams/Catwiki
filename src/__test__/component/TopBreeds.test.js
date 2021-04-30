import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

import TopBreeds from '../../containers/TopBreeds';

describe('<TopBreeds>', () => {
  const top = mount(<TopBreeds />);
  test('Render <TopBreeds>', () => {
    expect(top.length).toEqual(1);
  });
  // test('Render catList', () => {
  //   expect(top.find('catList').text());
  // });
});

describe('<TopBreeds> snapshot', () => {
  const top = create(<TopBreeds />);
  expect(top.toJSON()).toMatchSnapshot();
});

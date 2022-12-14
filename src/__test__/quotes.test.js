import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../components/Pages/Quotes';

describe('check Quotes', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  test('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});

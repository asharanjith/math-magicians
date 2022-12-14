import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/calculator';

describe('Calculator', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  test('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});

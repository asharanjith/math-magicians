import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('check Navbar', () => {
  const tree = renderer.create(<Router><Navbar /></Router>).toJSON();
  test('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});

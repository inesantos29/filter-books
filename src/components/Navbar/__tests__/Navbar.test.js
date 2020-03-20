import React from 'react';
import { shallow } from 'enzyme';

import Navbar from '../Navbar';

describe('<Navbar />', () => {
  describe('renders', () => {
    it('without crashing', () => {
      shallow(<Navbar />);
    });
  });
});

it('render h2 correctly', () => {
  const { getByText } = render(<CardList />);
  const textElement = getByText(/Our latest news/i);
  expect(textElement).toBeInTheDocument();
});

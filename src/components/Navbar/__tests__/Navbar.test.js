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

import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

describe('<Header />', () => {
  describe('renders', () => {
    it('without crashing', () => {
      shallow(<Header />);
    });
  });
});

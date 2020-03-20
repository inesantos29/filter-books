import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../Footer';

describe('<Footer />', () => {
  describe('renders', () => {
    it('without crashing', () => {
      shallow(<Footer />);
    });
  });
});

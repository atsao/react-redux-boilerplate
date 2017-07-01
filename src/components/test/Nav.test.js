import React from 'react';
import { shallow } from 'enzyme';

import Nav from '../Nav';

describe('Nav', () => {
  it('renders without crashing', () => {
    const tree = shallow(<Nav />);
    expect(tree).toMatchSnapshot();
  });
});

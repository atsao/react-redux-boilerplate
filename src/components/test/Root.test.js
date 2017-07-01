import React from 'react';
import { shallow } from 'enzyme';

import Root from '../Root';

describe('Root', () => {
  it('renders without crashing', () => {
    const tree = shallow(<Root />);
    expect(tree).toMatchSnapshot();
  });
});

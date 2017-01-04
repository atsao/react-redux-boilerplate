import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from 'components/Root'; // Root layout
import Welcome from 'modules/todos';

export default (
  <Route path="/" component={ Root }>
    <IndexRoute component={ Welcome }/>
  </Route>
);

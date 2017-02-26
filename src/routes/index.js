import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from '../components/Root'; // Root layout
import Posts from '../modules/posts';

export default (
  <Route path="/" component={ Root }>
    <IndexRoute component={ Posts }/>
  </Route>
);

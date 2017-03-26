import React from 'react';
import { Route, Switch } from 'react-router';

import Root from '../components/Root';
import Posts from '../modules/Postsx';

export default (
  <div>
    <Route component={Root} />
    <Switch>
      <Route exact path="/" component={Posts} />
    </Switch>
  </div>
);

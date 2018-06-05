import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Root from '../components/Root';
import Welcome from '../modules/Welcome';
import Posts from '../modules/Posts';

export default (
  <div>
    <Route component={Root} />
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/posts" component={Posts} />
    </Switch>
  </div>
);

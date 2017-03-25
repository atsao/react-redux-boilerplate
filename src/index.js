import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
import Root from './components/Root'; // Root layout
import Posts from './modules/posts';
import { PostsActions } from './redux/posts';

const history = createHistory();
const store = configureStore(history);
const synchedHistory = syncHistoryWithStore(history, store);

store.dispatch(PostsActions.requestPosts());

ReactDOM.render(
  <Provider store={store}>
    <Router history={synchedHistory}>
      <div>
        <Route component={Root} />
        <Switch>
          <Route exact path="/" component={Posts} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

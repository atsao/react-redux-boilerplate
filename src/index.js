import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
import routes from './routes';
import { PostsActions } from './redux/posts';

const store = configureStore();
const history = syncHistoryWithStore(
  browserHistory,
  store,
);
store.dispatch(PostsActions.postsFetchRequest());

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history } routes={ routes } />
  </Provider>
  , document.getElementById('root')
);

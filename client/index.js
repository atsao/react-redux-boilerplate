import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import rootReducer from './reducers';
import routes from './routes';

const middleware = routerMiddleware(browserHistory);
const createStoreWithMiddleware = applyMiddleware(thunk, middleware)(createStore);
const store = createStoreWithMiddleware(rootReducer);

const history = syncHistoryWithStore(browserHistory, store, { adjustUrlOnReplay: true });

render(
  <Provider store={ store }>
    <Router history={ history } routes={ routes } />
  </Provider>
  , document.getElementById('app')
);

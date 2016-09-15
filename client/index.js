import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';
import routes from './routes';

const mount = document.getElementById('app');

const createStoreWithMiddleware = applyMiddleware(thunk, routerMiddleware(browserHistory))(createStore);
export const store = createStoreWithMiddleware(rootReducer);

const history = syncHistoryWithStore(browserHistory, store, { adjustUrlOnReplay: true });

render (
  <Provider store={ store }>
    <Router history={ history } routes={ routes } />
  </Provider>
  , mount
);


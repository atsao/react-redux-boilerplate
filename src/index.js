import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import routes from './routes';
import rootSaga from './sagas';

import { TodosActions } from 'data/todos';

const middleware = routerMiddleware(browserHistory);
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, middleware];

if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger');
  const logger = createLogger();
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);

const history = syncHistoryWithStore(
  browserHistory,
  store,
);

sagaMiddleware.run(rootSaga);
store.dispatch(TodosActions.tasksFetchRequest());

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history } routes={ routes } />
  </Provider>
  , document.getElementById('root')
);

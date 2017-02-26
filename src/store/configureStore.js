import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { stateTransformer } from 'redux-seamless-immutable';

import rootReducer from '../rootReducer';
import rootSaga from '../sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = routerMiddleware(browserHistory);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, middleware];

if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger');
  const logger = createLogger({
    stateTransformer,
  });
  middlewares.push(logger);
}

export default function configureStore () {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  sagaMiddleware.run(rootSaga);

  return store;
}

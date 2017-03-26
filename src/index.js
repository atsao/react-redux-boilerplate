import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';

import configureStore from './store/configureStore';
import routes from './routes';
import { PostsActions } from './redux/posts';

const history = createHistory();
const store = configureStore(history);
const synchedHistory = syncHistoryWithStore(history, store);

store.dispatch(PostsActions.requestPosts());

const app = (
  <Provider store={store}>
    <Router history={synchedHistory}>
      {routes}
    </Router>
  </Provider>
);

const render = () =>
  ReactDOM.render(
    <AppContainer>
      {app}
    </AppContainer>,
    document.getElementById('root')
  );

render();

if (module.hot) {
  module.hot.accept('./routes', () => render());
}

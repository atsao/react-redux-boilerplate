import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';

import configureStore from './store/configureStore';
import routes from './routes';
import { PostsActions } from './redux/posts';

const history = createBrowserHistory();
const store = configureStore(history);

store.dispatch(PostsActions.requestPosts());

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
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

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { AppContainer } from 'react-hot-loader';
import { createStoreWithFirebase } from './reducers';
import reducer from './reducers';
import createHistory from 'history/createBrowserHistory';
import routes from 'routes';
import registerServiceWorker from './server/registerServiceWorker';
import { ConnectedRouter } from 'react-router-redux';

const store = createStoreWithFirebase(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const history = createHistory();

ReactDOM.hydrate(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {renderRoutes(routes.defaultLocale)}
      </ConnectedRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import App from './components/App';
import rootReducer, { rootEpic } from './store';

const dev = process.env.NODE_ENV !== 'production';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = dev ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;
const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(epicMiddleware), composeEnhancers()),
);

epicMiddleware.run(rootEpic);

ReactDOM.render(
  <HelmetProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </HelmetProvider>,
  document.getElementById('root'),
);

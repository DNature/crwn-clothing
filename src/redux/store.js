import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(
  rootReducer,
  // applyMiddleware(...middlewares)
  composeWithDevTools()
);

export default store;

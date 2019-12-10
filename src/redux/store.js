import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

export const store = createStore(
  rootReducer,
  process.env.NODE_ENV === 'development' && composeWithDevTools()
);

export const persistor = persistStore(store);

export default { store, persistor };

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const initialState = {};

const middleware = [thunk];

const devTools =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(...middleware)
    : compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      );

const store = createStore(reducers, initialState, devTools);

export default store;

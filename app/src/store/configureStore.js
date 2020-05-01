/* global window */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import * as viewer  from '../actions/viewer';
// import * as authenticated  from '../actions/authentificated';
import { getPreventedStore } from './utils';

const configureStore = () => {
  const middlewares = [thunk];
  const initialState = getPreventedStore();

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));

  const currentState = store.getState();

  if (currentState.authenticated && !currentState.viewer) {
    store.dispatch(viewer.requestViewer);
  }

  return store;
};

export default configureStore;

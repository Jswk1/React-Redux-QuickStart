import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index.js';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createLogger } from 'redux-logger';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(reduxImmutableStateInvariant())
  // other store enhancers if any
);

export default function configureStore(initalState) {
    return createStore(
        rootReducer,
        initalState,
        enhancer       
    );
}
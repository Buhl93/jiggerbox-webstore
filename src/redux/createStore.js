import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'

import rootReducer from './rootReducer';

// Bundle middlewares
export const middlewares = [thunk];

// Create store and apply middlewares
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

// create persistor
export const persistor = persistStore(store);

export default {
    store,
    persistor
};
import { createStore, applyMiddleware } from 'redux';
import { Reducer } from './reducer';
import logger from 'redux-logger';
import Thunk from 'redux-thunk';

const myStore = createStore(Reducer, applyMiddleware(logger, Thunk));

export default myStore;
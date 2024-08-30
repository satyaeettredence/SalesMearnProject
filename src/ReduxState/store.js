import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import userReducer from './reducer/salesReducer';

export default createStore(
  userReducer,
  applyMiddleware(thunk)
);
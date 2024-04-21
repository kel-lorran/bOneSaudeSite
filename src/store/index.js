import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import userReducer from './user';
import flowReducer from './flow';

const reducer = combineReducers({
    user: userReducer,
    flow: flowReducer,
});
  
const store = configureStore({ reducer });

export default store;
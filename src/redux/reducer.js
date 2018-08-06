import { combineReducers } from 'redux';
import { reducer as userReducer } from './user/reducer';

export const rootReducer = combineReducers({
  user: userReducer,
});

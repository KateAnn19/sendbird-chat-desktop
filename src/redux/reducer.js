import { combineReducers } from 'redux';
import { reducer as userReducer } from './user/reducer';
import { reducer as channelsReducer } from './channels/reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  channels: channelsReducer,
});

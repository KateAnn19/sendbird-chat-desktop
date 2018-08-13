import { combineReducers } from 'redux';
import { reducer as userReducer } from './user/reducer';
import { reducer as channelsReducer } from './channels/reducer';
import { reducer as searchReducer } from './search/reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  channels: channelsReducer,
  search: searchReducer
});

import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initState = {
  users: [],
  searching: false,
  successful: false,
  query: '',
};

const setUsers = (state, users) => ({ ...state, users });

const startSearching = () => ({
  users: [],
  searching: true,
  successful: false,
});

const setQuery = (state, query) => ({ ...state, query });

const successfulSearch = state => ({ ...state, successful: true });

const failureSearch = state => ({ ...state, successful: false });

const finishSearching = state => ({ ...state, searching: false });

const unsetUsers = () => initState;

const handlers = {
  [TYPES.SEARCH_START]: startSearching,
  [TYPES.SEARCH_FINISH]: finishSearching,
  [TYPES.SET_USERS]: setUsers,
  [TYPES.UNSET_USERS]: unsetUsers,
  [TYPES.SEARCH_SUCCESS]: successfulSearch,
  [TYPES.SEARCH_FAILURE]: failureSearch,
  [TYPES.SET_QUERY]: setQuery,
};

export const reducer = createReducer(initState, handlers);

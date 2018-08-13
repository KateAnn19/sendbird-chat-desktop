import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initState = {
  users: [],
  searching: false,
};

const setUsers = (state, { users }) => ({ ...state, users });

const startSearching = () => ({ users: [], searching: true });

const finishSearching = state => ({ ...state, searching: false });

const handlers = {
  [TYPES.SEARCH_START]: startSearching,
  [TYPES.SEARCH_FINISH]: finishSearching,
  [TYPES.SET_USERS]: setUsers,
};

export const reducer = createReducer(initState, handlers);

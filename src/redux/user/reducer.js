import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';


const initState = {
  fetching: false,
  user: null,
  error: null
};

const fetchUser = (state, user) => ({ ...user });

const setUser = (state, user) => ({ fetching: false, user, error: null });

const handlers = {
  [TYPES.SET_USER]: setUser,
  [TYPES.FETCH_USER]: fetchUser
};

export const reducer = createReducer(initState, handlers);

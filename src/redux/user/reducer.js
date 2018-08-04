import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initState = {
  fetching: false,
  user: {
    id: null,
    name: null,
  },
  error: null,
};

const fetchUser = (state, user) => ({ ...user });

const setUser = (state, newUser) => {
  const {
    user: { id, username },
  } = newUser;

  return {
    fetching: false,
    user: { id, name: username },
    error: null,
  };
};

const createUser = (state, newUser) => {
  const {
    user: { id, username },
  } = newUser;

  return {
    fetching: false,
    user: { id, name: username },
    error: null,
  };
};

const handlers = {
  [TYPES.SET_USER]: setUser,
  [TYPES.FETCH_USER]: fetchUser,
  [TYPES.CREATE_USER]: createUser,
};

export const reducer = createReducer(initState, handlers);

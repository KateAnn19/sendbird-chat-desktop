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

const setError = (state, message) => ({
  fetching: false,
  user: {
    id: null,
    username: null,
  },
  error: message,
});

const handlers = {
  [TYPES.SET_USER]: setUser,
  [TYPES.CREATE_USER]: createUser,
  [TYPES.FETCH_USER_FAILURE]: setError,
  [TYPES.CREATE_USER_FAILURE]: setError,
};

export const reducer = createReducer(initState, handlers);

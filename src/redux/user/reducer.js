import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initState = {
  fetching: false,
  user: null,
  error: null,
};

const setUser = (_, { user }) => ({ user, fetching: false, error: null });

const createUser = (_, { user }) => ({ user, fetching: false, error: null });

const setError = (_, error) => ({
  user: { id: null, username: null },
  fetching: false,
  error,
});

const handlers = {
  [TYPES.SET_USER]: setUser,
  [TYPES.CREATE_USER]: createUser,
  [TYPES.FETCH_USER_FAILURE]: setError,
  [TYPES.CREATE_USER_FAILURE]: setError,
};

export const reducer = createReducer(initState, handlers);

import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initState = {
  fetching: false,
  user: null,
  error: null,
};

const setUser = (_, { user }) => ({ user, fetching: false, error: null });

const createUser = (_, { user }) => ({ user, fetching: false, error: null });

const unsetUser = _ => ({ user: null, fetching: false, error: null });

const handlers = {
  [TYPES.SET_USER]: setUser,
  [TYPES.UNSET_USER]: unsetUser,
  [TYPES.CREATE_USER]: createUser,
};

export const reducer = createReducer(initState, handlers);

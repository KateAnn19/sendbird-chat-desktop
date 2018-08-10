import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initState = {
  loading: false,
  user: null,
  error: null,
};

const setUser = (state, { user }) => ({ ...state, user });

const createUser = (state, { user }) => ({ ...state, user });

const unsetUser = _ => ({ user: null, loading: false, error: null });

const startLoading = (state, _) => ({ ...state, loading: true });

const finishLoading = (state, _) => ({ ...state, loading: false });

const handlers = {
  [TYPES.SET_USER]: setUser,
  [TYPES.UNSET_USER]: unsetUser,
  [TYPES.CREATE_USER]: createUser,
  [TYPES.CONNECTION_CHECKING_START]: startLoading,
  [TYPES.CONNECTION_CHECKING_FINISH]: finishLoading,
};

export const reducer = createReducer(initState, handlers);

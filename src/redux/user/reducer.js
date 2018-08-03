import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';


const initState = {
  fetching: false,
  user: null,
  error: null
};

const getUserLoginData = (state, user) => ({ ...user });

const setUser = (state, user) => {
  const { fetching, error } = state;
  return { fetching, user, error };
};

const handlers = {
  [TYPES.SET_USER]: setUser,
  [TYPES.GET_USER_LOGIN_DATA]: getUserLoginData
};

export const reducer = createReducer(initState, handlers);

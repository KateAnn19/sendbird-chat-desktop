import * as TYPES from './types';

export const setUser = user => ({
  type: TYPES.SET_USER,
  payload: { user },
});

export const createUser = user => ({
  type: TYPES.CREATE_USER,
  payload: { user },
});

export const fetchUser = user => ({
  type: TYPES.FETCH_USER,
  payload: { user },
});

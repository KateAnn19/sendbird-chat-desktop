import * as TYPES from './types';

export const setUser = user => ({
  type: TYPES.SET_USER,
  payload: { user },
});

export const createUser = user => ({
  type: TYPES.CREATE_USER,
  payload: { user },
});

export const createUserSuccess = () => ({
  type: TYPES.CREATE_USER_SUCCESS,
});

export const createUserFailure = err => ({
  type: TYPES.CREATE_USER_FAILURE,
  err,
});

export const fetchUser = user => ({
  type: TYPES.FETCH_USER,
  payload: { user },
});

export const fetchUserSuccess = () => ({
  type: TYPES.FETCH_USER_SUCCESS,
});

export const fetchUserFailure = err => ({
  type: TYPES.FETCH_USER_FAILURE,
  err,
});

import * as TYPES from './types';


export const setUser = user => ({
  type: TYPES.SET_USER,
  payload: { user }
});

export const getUserLoginData = data => ({
  type: TYPES.GET_USER_LOGIN_DATA,
  payload: { data }
});

export const fetchUser = () => ({
  type: TYPES.FETCH_USER
});

export const fetchUserSuccess = () => ({
  type: TYPES.FETCH_USER_SUCCESS
});
export const fetchUserFailure = () => ({
  type: TYPES.FETCH_USER_FAILURE
});

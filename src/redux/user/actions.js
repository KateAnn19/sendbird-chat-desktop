import * as TYPES from './types';

export const setUser = user => ({
  type: TYPES.SET_USER,
  payload: { user },
});

export const unsetUser = () => ({
  type: TYPES.UNSET_USER,
});

export const createUser = user => ({
  type: TYPES.CREATE_USER,
  payload: { user },
});

export const fetchUser = user => ({
  type: TYPES.FETCH_USER,
  payload: { user },
});

export const disconnectUser = () => ({
  type: TYPES.DISCONNECT_USER,
});

export const connectionCheckingSuccess = () => ({
  type: TYPES.CONNECTION_CHECKING_SUCCESS,
});

export const connectionCheckingStart = () => ({
  type: TYPES.CONNECTION_CHECKING_START,
});

export const connectionCheckingFinish = () => ({
  type: TYPES.CONNECTION_CHECKING_FINISH,
});

import * as TYPES from './types';


export const setUser = user => ({
  type: TYPES.SET_USER,
  payload: { user }
});

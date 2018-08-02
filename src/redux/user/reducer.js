import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';


const initState = {};

const setUser = (state, user) => ({ ...state, user });
const handlers = {
  [TYPES.SET_USER]: setUser
};

export const reducer = createReducer(initState, handlers);

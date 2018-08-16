import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initState = {
  message: '',
  history: [],
};

const setMessage = (state, message) => ({
  history: state.history.concat(message),
  message,
});

const handlers = {
  [TYPES.SEND_MESSAGE]: setMessage,
};

export const reducer = createReducer(initState, handlers);

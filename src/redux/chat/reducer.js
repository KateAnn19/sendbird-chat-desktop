import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initState = {
  messages: [],
};

const setMessage = (state, message) => ({
  messages: [...state.messages, message],
});

const handlers = {
  [TYPES.SEND_MESSAGE]: setMessage,
};

export const reducer = createReducer(initState, handlers);

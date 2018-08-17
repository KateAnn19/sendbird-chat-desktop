import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initState = {
  messages: [],
};

const setMessages = (_, messages) => ({ messages });

const setMessage = (state, message) => ({
  messages: [...state.messages, message],
});

const handlers = {
  [TYPES.LOAD_MESSAGES_FINISH]: setMessages,
  [TYPES.SET_MESSAGE]: setMessage,
};

export const reducer = createReducer(initState, handlers);

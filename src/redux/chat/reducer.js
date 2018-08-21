import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initState = {
  messages: [],
  typing: false,
  typers: [],
};

const setMessages = (state, messages) => ({ ...state, messages });

const setMessage = (state, message) => ({
  ...state,
  messages: [...state.messages, message],
});

const setTypers = (state, typers) => ({ ...state, typers: [ ...typers ] });

const handlers = {
  [TYPES.LOAD_MESSAGES_FINISH]: setMessages,
  [TYPES.SET_MESSAGE]: setMessage,
  [TYPES.SET_TYPERS]: setTypers,
};

export const reducer = createReducer(initState, handlers);

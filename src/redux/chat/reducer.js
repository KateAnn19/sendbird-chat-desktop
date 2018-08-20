import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initState = {
  messages: [],
  typing: false,
};

const setMessages = (state, messages) => ({ ...state, messages });

const setMessage = (state, message) => ({
  ...state,
  messages: [...state.messages, message],
});

const toggleTypingStatus = state => ({ ...state, typing: !state.typing });

const handlers = {
  [TYPES.LOAD_MESSAGES_FINISH]: setMessages,
  [TYPES.TOGGLE_TYPING_STATUS]: toggleTypingStatus,
  [TYPES.SET_MESSAGE]: setMessage,
};

export const reducer = createReducer(initState, handlers);

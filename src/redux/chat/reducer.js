import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initState = {
  messages: [],
};

const setMessages = (_, messages) => ({ messages });

const handlers = {
  [TYPES.LOAD_MESSAGES_FINISH]: setMessages,
};

export const reducer = createReducer(initState, handlers);

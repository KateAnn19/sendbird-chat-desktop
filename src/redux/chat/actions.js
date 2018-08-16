import * as TYPES from './types';

export const sendMessage = message => ({
  type: TYPES.SEND_MESSAGE,
  payload: message,
});

export const setMessage = message => ({
  type: TYPES.SET_MESSAGE,
  payload: message
})

export const receiveMessages = () => ({
  type: TYPES.RECEIVE_MESSAGES,
});

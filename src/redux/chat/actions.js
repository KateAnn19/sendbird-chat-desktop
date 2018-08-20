import * as TYPES from './types';

export const sendMessage = message => ({
  type: TYPES.SEND_MESSAGE,
  payload: message,
});

export const setMessage = message => ({
  type: TYPES.SET_MESSAGE,
  payload: message,
});

export const receiveMessages = () => ({
  type: TYPES.RECEIVE_MESSAGES,
});

export const receiveMessage = (receivedChannel, message) => ({
  type: TYPES.RECEIVE_MESSAGE,
  payload: { receivedChannel, message },
});

export const loadMessagesStart = () => ({
  type: TYPES.LOAD_MESSAGES_START,
});

export const loadMessagesFinish = messages => ({
  type: TYPES.LOAD_MESSAGES_FINISH,
  payload: messages,
});

export const startTyping = channel => ({
  type: TYPES.START_TYPING,
  payload: channel,
});

export const endTyping = channel => ({
  type: TYPES.END_TYPING,
  payload: channel,
});

export const changeTypingStatus = (channel) => ({
  type: TYPES.CHANGE_TYPING_STATUS,
  payload: channel
})

export const toggleTypingStatus = () => ({
  type: TYPES.TOGGLE_TYPING_STATUS,
})

import * as TYPES from './types';

export const setChannels = channels => ({
  type: TYPES.SET_CHANNELS,
  payload: channels,
});

export const createChannel = channel => ({
  type: TYPES.CREATE_CHANNEL,
  payload: channel,
});

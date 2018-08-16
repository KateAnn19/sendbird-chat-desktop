import * as TYPES from './types';

export const setChannels = channels => ({
  type: TYPES.SET_CHANNELS,
  payload: channels,
});

export const createChannel = channel => ({
  type: TYPES.CREATE_CHANNEL,
  payload: channel,
});

export const setChannel = channel => ({
  type: TYPES.SET_CHANNEL,
  payload: channel,
});

export const enterChannel = channel => ({
  type: TYPES.ENTER_CHANNEL,
  payload: channel,
});

export const loadChannelsStart = () => ({
  type: TYPES.LOADING_CHANNELS_START,
});

export const loadChannelsFinish = () => ({
  type: TYPES.LOADING_CHANNELS_FINISH,
});

import * as TYPES from './types';

export const getChannels = channels => ({
  type: TYPES.GET_CHANNELS,
  payload: { channels },
});

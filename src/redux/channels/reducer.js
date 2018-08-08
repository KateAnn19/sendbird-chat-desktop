import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initState = {
  channels: null,
};

const getChannels = (_, channels) => ({ channels });

const createChannel = (_, { channel }) => ({ channels.concat(channel) })

const handlers = {
  [TYPES.GET_CHANNELS]: getChannels,
  [TYPES.CREATE_CHANNEL]: createChannel,
};

export const reducer = createReducer(initState, handlers);

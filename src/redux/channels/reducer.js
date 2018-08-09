import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initState = {
  channels: null,
};

const getChannels = (_, channels) => ({ channels });

const handlers = {
  [TYPES.GET_CHANNELS]: getChannels,
};

export const reducer = createReducer(initState, handlers);

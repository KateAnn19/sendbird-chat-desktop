import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initState = {
  channels: [],
};

const setChannels = (_, channels) => ({ channels });

const handlers = {
  [TYPES.SET_CHANNELS]: setChannels,
};

export const reducer = createReducer(initState, handlers);

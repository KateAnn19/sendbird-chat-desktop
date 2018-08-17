import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initState = {
  channels: [],
  currentChannel: null,
  loading: false,
};

const setChannels = (state, channels) => ({ ...state, channels });

const setChannel = (state, channel) => ({
  ...state,
  currentChannel: channel,
});

const startLoading = state => ({ ...state, loading: true });

const finishLoading = state => ({ ...state, loading: false });

const handlers = {
  [TYPES.SET_CHANNEL]: setChannel,
  [TYPES.SET_CHANNELS]: setChannels,
  [TYPES.LOADING_CHANNELS_START]: startLoading,
  [TYPES.LOADING_CHANNELS_FINISH]: finishLoading,
};

export const reducer = createReducer(initState, handlers);

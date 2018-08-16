import { createReducer } from '../../utils/createReducer';
import * as TYPES from './types';

const initState = {
  channels: [],
  currentChannel: '',
  loading: false,
};

const setChannels = (state, channels) => ({ ...state, channels });

const enterChannel = (state, channel) => ({
  ...state,
  currentChannel: channel,
});

const startLoading = state => ({ ...state, loading: true });

const finishLoading = state => ({ ...state, loading: false });

const handlers = {
  [TYPES.SET_CHANNELS]: setChannels,
  [TYPES.ENTER_CHANNEL]: enterChannel,
  [TYPES.LOADING_CHANNELS_START]: startLoading,
  [TYPES.LOADING_CHANNELS_FINISH]: finishLoading,
};

export const reducer = createReducer(initState, handlers);

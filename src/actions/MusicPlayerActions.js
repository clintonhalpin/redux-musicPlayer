import * as types from '../constants/ActionTypes';

export function markPlaying(name) {
  return {
    type: types.MARK_PLAYING,
    name
  };
}
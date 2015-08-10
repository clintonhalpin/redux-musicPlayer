import { MARK_PLAYING } from '../constants/ActionTypes';
import { Tracks } from '../constants/Tracks';

const initialState = {
  tracks : Tracks,
  playingTrack: {},
};

export default function tracks(state = initialState, action) {

  switch (action.type) {
  
  case MARK_PLAYING:
    let newState = {
      ...state,
      playingTrack : action.name
    };
    return newState
  default:
    return state;
  }
}

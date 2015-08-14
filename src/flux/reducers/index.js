import 'babel-core/browser-polyfill';

import { 
	PLAYER_STOPPED, 
	PLAYER_PLAYING, 
	SET_SONG, 
	PAUSE_SONG 
} from './../constants'


let initialState = {
	songs: [
		{ id: 0, name: "Holler" },
		{ id: 1, name: "Yolo" },
		{ id: 2, name: "Wut" }
	],
	playingSong: false,
	playingSongID: ''
}

export default function tracksApp(state = initialState, action) {
  switch (action.type) {
  	case SET_SONG:
		return Object.assign({}, state, {
			playingSongID: action.id,
			playingSong: true
		});
	case PAUSE_SONG:
		return Object.assign({}, state, {
			playingSong: false
		});
  	default: 
  		return state
  }
}
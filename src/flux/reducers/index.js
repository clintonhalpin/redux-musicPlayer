import 'babel-core/browser-polyfill';
import * as constants from './../constants';

let initialState = {
	songs: constants.defaultSongs,
	playingSong: constants.PLAYER_STOPPED,
	playingSongID: '',
	isLoggedIn: false
}

export default function nextSong(state, idx) {
	if(state.playingSongID === 'undefined') {
		return 0
	} else if(state.playingSongID === state.songs.length) {
		return state.playingSongID
	} else {
		return state.playingSongID + 1
	}
}

export default function prevSong(state, idx) {
	if(state.playingSongID === 'undefined') {
		return 0
	} else if(state.playingSongID === 0) {
		return 0
	} else {
		return state.playingSongID - 1
	}
}

export default function tracksAppStore(state = initialState, action) {
  switch (action.type) {
  	case constants.SET_SONG:
		return Object.assign({}, state, {
			playingSongID: action.id,
			playingSong: constants.PLAYER_PLAYING
		});
	case constants.PLAYER_PAUSED:
		return Object.assign({}, state, {
			playingSong: constants.PLAYER_PAUSED
		});
	case constants.PLAYER_PLAYING:
		return Object.assign({}, state, {
			playingSong: constants.PLAYER_PLAYING
		});
	case constants.PLAYER_NEXT:
		return Object.assign({}, state, {
			playingSongID: nextSong(state, state.playingSongID),
			playingSong: constants.PLAYER_PLAYING
		});
	case constants.PLAYER_PREV:
		return Object.assign({}, state, {
			playingSongID: prevSong(state, state.playingSongID),
			playingSong: constants.PLAYER_PLAYING
		});
	case constants.AUTHENTICATE_SET_STORAGE:
		localStorage.setItem('code', action.auth.code)
		localStorage.setItem('token', action.auth.token)

		return Object.assign({}, state, {
			isLoggedIn: action.isLoggedIn
		});
		return state
	case constants.RECIEVE_SONGS:
		var cleanSongArray = action.songs.collection.map((item, idx) => {
			return item.origin
		});
		return Object.assign({}, state, {
			songs: cleanSongArray
		});
		return state
	case constants.REQUEST_SONGS:
		return state
	case constants.REQUEST_SONGS_FAILURE:
		return state
  	default: 
  		return state
  }
}

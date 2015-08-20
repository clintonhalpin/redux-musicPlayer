import * as constants from './../constants';
import { dispatch } from 'redux';

export function setCurrentSong(id) {
	return {
		type: constants.SET_SONG,
		id
	}
}

export function pauseCurrentSong() {
	return {
		type: constants.PLAYER_PAUSED
	}
}


export function nextSong(id) {
	return {
		type: constants.PLAYER_NEXT,
		id
	}
}


export function prevSong(id) {
	return {
		type: constants.PLAYER_PREV,
		id
	}
}

export function shouldSetAuthentication(code, token) {
	return {
		type: constants.AUTHENTICATE_SET_STORAGE,
		isLoggedIn: true,
		auth : {
			code,
			token
		}
	}
}

export function authenticate(code, token) {
	if(code && token) {
		return (dispatch) => {
			return dispatch(shouldSetAuthentication(code, token));
		}
	}
}

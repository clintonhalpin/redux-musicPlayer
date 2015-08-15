import * as constants from './../constants';

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
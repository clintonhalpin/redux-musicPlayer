import fetch from 'isomorphic-fetch';
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


export function receiveSongs(res) {
	return {
		type: constants.RECIEVE_SONGS,
		songs: res,
		receivedAt: Date.now()
	}	
}

function requestSongs() {
  return {
    type: constants.REQUEST_SONGS
  };
}

function fetchSongs() {
  var token = localStorage.getItem('token');
  return dispatch => {
    dispatch(requestSongs());
    return fetch(`https://api.soundcloud.com/me/activities/tracks/?client_id=${constants.clientID}&token=${token}&offset=0&limit=24`, {
    	method: 'get',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
    }).then(req => req.json())
      .then(json => console.log(json))
      .then(json => dispatch(receiveSongs(json)));
  }
}

export function fetchSongsIfNeeded() {
	return (dispatch, getState) => {
		return dispatch(fetchSongs());
	};
}
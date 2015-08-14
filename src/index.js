import React from 'react';
import { createStore } from 'redux';
import tracksApp from './flux/reducers';
import { PAUSE_SONG, NEXT_SONG } from './flux/constants';


let store = createStore(tracksApp);

console.group('Initial State');
console.log(store.getState());
console.groupEnd();

function setCurrentSong(id) {
	return {
		type: 'SET_SONG',
		id
	}
}

store.dispatch(setCurrentSong(0));

console.group('Select a Song');
console.log(store.getState());
console.groupEnd();


function pauseCurrentSong() {
	return {
		type: PAUSE_SONG
	}
}

store.dispatch(pauseCurrentSong());

console.group('Pause the current song');
console.log(store.getState());
console.groupEnd();




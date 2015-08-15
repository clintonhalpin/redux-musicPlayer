import React from 'react';
import { createStore } from 'redux';
import tracksApp from './flux/reducers';
import * as constants from './flux/constants';
import * as actions from './flux/actions';


let store = createStore(tracksApp);

console.group('Initial State');
console.log(store.getState());
console.groupEnd();

store.dispatch(actions.setCurrentSong(0));

console.group('Select a Song');
console.log(store.getState());
console.groupEnd();


store.dispatch(actions.pauseCurrentSong());

console.group('Pause the current song');
console.log(store.getState());
console.groupEnd();

store.dispatch(actions.nextSong(store.getState().playingSongID));

console.group('Next song');
console.log(store.getState());
console.groupEnd();

store.dispatch(actions.prevSong(store.getState().playingSongID));

console.group('Previous song');
console.log(store.getState());
console.groupEnd();
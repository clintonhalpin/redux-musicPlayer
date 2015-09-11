export const PLAYER_STOPPED = "PLAYER_STOPPED";
export const PLAYER_PAUSED = "PLAYER_PAUSED";
export const PLAYER_PLAYING = "PLAYER_PLAYING";
export const PLAYER_PREV = "PLAYER_PREV";
export const PLAYER_NEXT = "PLAYER_NEXT";

export const SET_SONG = 'SET_SONG';

export const AUTHENTICATE = 'AUTHENTICATE';
export const AUTHENTICATE_SET_STORAGE = 'AUTHENTICATE_SET_STORAGE';

export const RECIEVE_SONGS = 'RECIEVE_SONGS';
export const REQUEST_SONGS = 'REQUEST_SONGS';
export const REQUEST_SONGS_FAILURE = 'REQUEST_SONGS_FAILURE';

export const clientID = '32cf5214879b701f8572959b0a0ab630';
export const redirect = 'http://localhost:3000';
export const auth_url = `https://soundcloud.com/connect?client_id=${clientID}&response_type=code_and_token&scope=non-expiring&redirect_uri=${redirect}`;
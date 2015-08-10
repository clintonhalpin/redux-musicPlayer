import React, { Component } from 'react';
import MusicPlayerApp from './MusicPlayerApp';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';

 const finalCreateStore = compose(
   devTools(),
   persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
   createStore
 );

const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer);

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
        {() => <MusicPlayerApp />}
        </Provider>
      </div>
    );
  }
}

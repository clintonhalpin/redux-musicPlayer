import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Radium from 'radium';
import {Router, Route } from 'react-router';
import tracksAppStore from './../flux/reducers';
import * as gs from './../styles/';
import App from './App';
import Home from './../components/Home';
import Player from './../components/Player';

const store = createStore(tracksAppStore);

@Radium
export default class Root extends Component {
render() {
    return (
      <div style={[gs.ff.sanSerif, gs.p._0, gs.m._0]}>
        <Provider store={store}>
          {() =>
            <Router history={this.props.history}>
              <Route component={App}>
                <Route path="/" component={Home} />
                <Route path="/player" component={Player} />
              </Route>
            </Router>
          }
        </Provider>
      </div>
    );
  }
}
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import * as gs from './../styles/';

@Radium
export default class Home extends Component {

  render() {
    return (
      <div style={[gs.ta.center, gs.p._t4, gs.p._b4]}>
        <h1 style={[{color: gs.colors.white}, gs.fs.large, gs.fw.normal ]}>Get started with "Tracks" by siginin in with SoundCloud</h1>
        <div style={[gs.p._t2, gs.p.t4]}>
          <Link to={'player'} style={gs.buttons}>Sign In With SoundCloud</Link>
        </div>
      </div>
    );
  }
}
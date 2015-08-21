import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import * as gs from './../styles/';
import axios from 'axios';
import { auth_url } from './../flux/constants/';

@Radium
export default class Home extends Component {
  handleClick() {
      window.location.assign(auth_url);
  } 
  render() {
    return (
      <div style={[gs.ta.center, gs.p._t4, gs.p._b4]}>
        <h1 style={[{color: gs.colors.white}, gs.fs.large, gs.fw.normal, { maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto'} ]}>dux connects to your SoundCloud  account. You can play some tune’s with the help of react , redux, react-gs</h1>
        <div style={[gs.p._t2, gs.p.t4]}>
          <a onClick={this.handleClick.bind(this) } href="#" style={gs.buttons}>Sign In With SoundCloud</a>
        </div>
      </div>
    );
  }
}

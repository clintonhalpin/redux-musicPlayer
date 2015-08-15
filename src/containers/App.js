import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as gs from './../styles/';
import Radium from 'radium';

@Radium
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location, children } = this.props;
    return (
      <div style={[{backgroundColor: '#B10DC9', height: '100%'}]}>
        <h1 style={[gs.ta.center, gs.p._t1, gs.p._b2, gs.fw.normal, {color: 'white'}, gs.m._0]}>tracks</h1>
        {children}
      </div>
    );
  }
}
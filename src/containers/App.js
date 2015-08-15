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
    let isHomePage = location.pathname === '/';

    return (
      <div style={[{backgroundColor: isHomePage ? '#B10DC9' : 'white', height: '100%'}]}>
        <h1 style={[gs.ta.center, gs.p._t1, gs.p._b2, gs.fw.normal, {color: isHomePage ? 'white': '#222'}, gs.m._0]}>tracks</h1>
        {children}
      </div>
    );
  }
}
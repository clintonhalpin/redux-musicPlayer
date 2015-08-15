import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import * as gs from './../styles/';
import { connect } from 'react-redux';

@Radium
export default class Player extends Component {
  render() {
    console.group('Player')
    console.log(this.props)
    console.groupEnd()
    return (
      <div style={[gs.ta.center, gs.p._t4, gs.p._b4]}>
        <h1>Player!</h1>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(Player);
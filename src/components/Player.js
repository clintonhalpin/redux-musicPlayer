import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import * as gs from './../styles/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SongList from './SongList';
import * as actionCreators from './../flux/actions';

@Radium
export default class Player extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div style={[gs.p._b4]}>
        <SongList songs={this.props.songs} setSong={this.props.actions.setCurrentSong} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);

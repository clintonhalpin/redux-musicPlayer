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
  render() {
    const { songs, playingSongID, playingSong, actions } = this.props;
    return (
      <div style={[gs.ta.center, gs.p._b4]}>
        <SongList songs={songs} setSong={actions.setCurrentSong} />
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
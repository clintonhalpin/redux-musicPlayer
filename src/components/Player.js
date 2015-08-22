import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import Radium from 'radium';
import * as gs from './../styles/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SongList from './SongList';
import PlayBar from './PlayBar';
import * as actionCreators from './../flux/actions';

@Radium
export default class Player extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { songs, actions, playingSongID, playingSong } = this.props;

    let songObject = _.findIndex(songs, (item) => {
      return item.id === playingSongID
    })

    return (
      <div>
        <div style={[gs.p._b4, { maxWidth: '64rem', marginLeft: 'auto', marginRight: 'auto'}]}>
          <SongList songs={songs} setSong={actions.setCurrentSong} />
        </div>
        <div>
          <PlayBar song={songs[songObject]} playingSong={playingSong} />
        </div>
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

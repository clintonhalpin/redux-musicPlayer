import React, { Component, PropTypes } from 'react';
import TrackList from './TrackList';
import TrackPlayer from './TrackPlayer';

export default class MainSection extends Component {
  render() {
    const { musicApp, actions } = this.props;
    return (
      <section className="main">
        <h1 className="text--center text--purple">tracks</h1>
        <TrackList
          tracks={this.props.musicApp.tracks}
          playingTrack={this.props.musicApp.playingTrack}
          actions={this.props.actions} />
        <TrackPlayer
          playingTrack={this.props.musicApp.playingTrack} />
      </section>
    );
  }
}

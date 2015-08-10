import React, { Component, PropTypes } from 'react';
import TrackItem from './TrackItem';

export default class TrackList extends Component {

  render() {
    const {tracks, playingTrack, actions} = this.props;
    let styles = {
        marginBottom: 96 
    }
    return (
      <div style={styles}>
          {this.props.tracks.map((trackObject,idx) =>
            <TrackItem
              key={idx}
              track={trackObject}
              currentTrack={this.props.playingTrack.title === trackObject.title  || false}
              actions={actions} />
          )}
      </div>
    );
  }
}

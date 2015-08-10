import React, { Component, PropTypes } from 'react';

export default class TrackItem extends Component {
  render() {
    const {track, currentTrack, actions} = this.props;
    let styles = {
        mainCell: {
            padding: '1rem',
            display: 'flex',
            border: currentTrack ? '2px solid #9013FE' : '2px solid white'
        },
        thumb: {
            maxWidth: 144,
            marginRight: '1rem' 
        },
        bodyTitle: {
            fontSize: '2rem',
            marginTop: '2rem'
        },
        bodySecondary: {
            margin: 0
        }

    }

    return (
      <div style={styles.mainCell} onClick={() => actions.markPlaying(track)}>
        <div style={styles.image}>
            <img style={styles.thumb} src={track.thumb_url_large} alt={track.title}/>
        </div>
        <div style={styles.body}>
            <p style={styles.bodyTitle} >{track.title}</p>
            <p style={styles.bodySecondary}>{track.artist}</p>
        </div>
      </div>
    );
  }
}

import React, { Stylesheet, Component, PropTypes } from 'react';
import secondsToTime from './../util/secondsToTime';

export default class TrackPlayer extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    const {playingTrack, actions} = this.props;
    const styles = {
        wrapper: {
            position: 'fixed',
            backgroundColor: '#D8D8D8',
            bottom: 0,
            left: 0,
            right: 0,
            padding: 20,
            display: 'flex',
        },
        controls: {
            padding: '1rem',
            verticalAlign: 'middle'
        },
        progressBar: {
            display: 'flex',
            flexGrow: 2,
            padding: '1rem',
            verticalAlign: 'middle'
        },
        progressBarBar: {
            flexGrow: 2,
            marginLeft: '1rem',
            marginRight: '1rem',
            marginTop: '.25rem'
        },
        currentSong: {
            width: 200,
            display: 'flex',
            flexAlign: 'center'
        }
    }
    return (
      <div style={styles.wrapper}>
        <div style={styles.controls}>
            <span>Next</span>
            <span>Play</span>
            <span>Prev</span>
        </div>
        <div style={styles.progressBar}>
            <span>0:00</span> 
            <progress style={styles.progressBarBar} max="100" value="20"></progress>
            <span>{secondsToTime(this.props.playingTrack.time)}</span>
        </div>
        <div style={styles.currentSong}>
            <img src={this.props.playingTrack.thumb_url} />
            <span className="text--truncate">{this.props.playingTrack.title}</span>
        </div>
      </div>
    );
  }
}

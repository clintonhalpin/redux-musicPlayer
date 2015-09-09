import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { PlayButton, Timer, Progress, Icons } from 'react-soundplayer/components';
import * as constants from './../flux/constants';

class PlayPause extends React.Component {
    togglePlay() {
        let { playing, soundCloudAudio } = this.props;
        if (playing) {
            soundCloudAudio.pause();
        } else {
            soundCloudAudio.play();
        }
    }

    render() {
        let { playing } = this.props;
        let text = playing ? 'Pause' : 'Play';

        return (
            <button onClick={this.togglePlay.bind(this)}>
                {text}
            </button>
        );
    }
}


@Radium
export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playing: false
    }
  }
  
  handleClick() {
    this.setState({ playing : !this.state.playing })
    console.log('holler')
    console.log(this.state)
  }

  render() {
    const { song, playingSong } = this.props;
      return (
        <div className="play-bar border-top flex--container">
          <div className="flex--1">
            <p className="m0">{ song.title || ' ' }</p>
            
            <SoundPlayerContainer streamUrl={song.stream_url || ''} playing={this.state.playing} clientId={constants.clientID}>
               <PlayPause />
            </SoundPlayerContainer>

          </div>
        </div>
      ); 
  }
}
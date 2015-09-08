import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { PlayButton, Timer, Progress, Icons } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import * as constants from './../flux/constants';
import soundCloudAudio from 'soundcloud-audio';

@Radium
export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { song, playingSong, soundCloudAudio } = this.props;
      return (
        <div className="play-bar border-top flex--container">
          <div className="mr2">
          </div>
          <div className="flex--1">
            <p className="m0">{ song.title || ' ' }</p>
            <SoundPlayerContainer streamURL={song.stream_url || ''}  clientId={constants.clientID}>
                <Progress />
            </SoundPlayerContainer>
          </div>
        </div>
      ); 
  }
}

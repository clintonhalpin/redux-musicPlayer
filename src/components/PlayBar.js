import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { PlayButton, Timer, Progress, Icons } from 'react-soundplayer/components';
import * as constants from './../flux/constants';

@Radium
export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { song, playingSong } = this.props;
      return (
        <div className="play-bar border-top flex--container">
          <div className="flex--1">
            <p className="m0">{ song.title || ' ' }</p>
            
            <SoundPlayerContainer streamUrl={song.stream_url || ''}  clientId={constants.clientID}>
                <div className="p1 mb3 mt3 flex flex-center bg-darken-1 red rounded">
                    <PlayButton {...this.props} />
                </div>
            </SoundPlayerContainer>

          </div>
        </div>
      ); 
  }
}
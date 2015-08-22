import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import PlayButton from './PlayButton'



@Radium
export default class Home extends Component {
  render() {
    const { song, playingSong } = this.props;
      console.log(playingSong)
      return (
        <div className="play-bar border-top flex--container">
          <div className="mr2">
            <PlayButton playing={playingSong === "PLAYER_PLAYING" ? true : false} />
            Prev, Play, Next
          </div>
          <div className="flex--1">
            <p className="m0">Title</p>
            <progress value="20" max="100" className="wi--full" />
          </div>
        </div>
      ); 
  }
}

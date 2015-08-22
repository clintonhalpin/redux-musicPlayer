import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import Radium from 'radium';
import * as gs from './../styles/';
import axios from 'axios';
import { auth_url } from './../flux/constants/';

@Radium
export default class Home extends Component {
  render() {
    const { song } = this.props;
    if(song) {
      return (
        <div className="play-bar">
          {song.title}
        </div>
      );
    } else {
      return (
        <div className="play-bar">
          No Song
        </div>
      )
    }
    
  }
}

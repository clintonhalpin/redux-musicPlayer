import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { PlayButton, Timer, Progress, Icons } from 'react-soundplayer/components';
import * as constants from './../flux/constants';
import SoundCloudAudio from 'soundcloud-audio';

@Radium
export default class PlayBar extends Component {
    constructor(props, context) {
        super(props, context);

        if ('undefined' !== typeof window) {
            this.soundCloudAudio = new SoundCloudAudio(constants.clientID);
        }

        this.state = {
            duration: 0,
            currentTime: 0,
            seeking: false,
            playing: false
        };
    }

    componentDidMount() {
        const { soundCloudAudio } = this;
        const { resolveUrl, streamUrl } = this.props;

        if (streamUrl) {
            soundCloudAudio.preload(streamUrl);
        } else if (resolveUrl) {
            soundCloudAudio.resolve(resolveUrl, (data) => {
                this.setState({
                    [data.tracks ? 'playlist' : 'track']: data
                });
            });
        }

        // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
        soundCloudAudio.on('playing', this.onAudioStarted.bind(this));
        soundCloudAudio.on('timeupdate', this.getCurrentTime.bind(this));
        soundCloudAudio.on('loadedmetadata', this.getDuration.bind(this));
        soundCloudAudio.on('seeking', this.onSeekingTrack.bind(this));
        soundCloudAudio.on('seeked', this.onSeekedTrack.bind(this));
        soundCloudAudio.on('pause', this.onAudioEnded.bind(this));
        soundCloudAudio.on('ended', this.onAudioEnded.bind(this));
    }

    componentWillReceiveProps(nextProps) {
        const { soundCloudAudio } = this;
        const { streamUrl, resolveUrl } = this.props;
        const playedBefore = this.state.playing;

        function restartIfPlayed () {
            if (playedBefore) {
                soundCloudAudio.play();
            }
        }

        if (streamUrl !== nextProps.streamUrl) {
            soundCloudAudio.stop();
            soundCloudAudio.preload(nextProps.streamUrl);
            restartIfPlayed();
        } else if (resolveUrl !== nextProps.resolveUrl) {
            soundCloudAudio.stop();
            soundCloudAudio.resolve(nextProps.resolveUrl, (data) => {
                this.setState({
                    [data.tracks ? 'playlist' : 'track']: data
                });
                restartIfPlayed();
            });
        }
    }

    componentWillUnmount() {
        this.soundCloudAudio.unbindAll();
    }

    onSeekingTrack() {
        this.setState({seeking: true});
    }

    onSeekedTrack() {
        this.setState({seeking: false});
    }

    onAudioStarted() {
        const { soundCloudAudio } = this;
        const { onStartTrack } = this.props;

        this.setState({playing: true});

        stopAllOther(soundCloudAudio.playing);
        addToPlayedStore(soundCloudAudio);

        onStartTrack && onStartTrack(soundCloudAudio, soundCloudAudio.playing);
    }

    onAudioEnded() {
        const { onStopTrack } = this.props;
        this.setState({playing: false});

        onStopTrack && onStopTrack(this.soundCloudAudio);
    }

    getCurrentTime() {
        this.setState({currentTime: this.soundCloudAudio.audio.currentTime});
    }

    getDuration() {
        this.setState({duration: this.soundCloudAudio.audio.duration});
    }

    wrapChild(child) {
        const newProps = assign({}, { soundCloudAudio: this.soundCloudAudio }, this.state);
        return cloneWithProps(child, newProps);
    }

    render() {
      const { song, playingSong } = this.props;
        return (
          <div className="play-bar border-top flex--container">
            <div className="flex--1">
              <p className="m0">{ song.title || ' ' }</p>
            </div>
          </div>
        ); 
    }
}
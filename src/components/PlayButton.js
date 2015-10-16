import React, { Component } from 'react';

export default class PlayButton extends Component {
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

        if (!track) {
            return <div>Loading...</div>;
        }

        return (
            <button onClick={this.togglePlay.bind(this)}>
                {text}
            </button>
        );
    }
}

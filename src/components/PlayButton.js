import React, { Component } from 'react';

export default class PlayButton extends Component {
    render() {
    
    let buttonPlaying = `
    <svg width="9px" height="12px" viewBox="0 0 9 12">
    <g stroke-width="1">
        <g transform="translate(-345.000000, -224.000000)">
            <g transform="translate(336.000000, 218.000000)">
                <path d="M9.49783812,17.0814626 L9.4,6.6 L17.2,11.7700299 L9.49783812,17.0814626 Z"></path>
            </g>
        </g>
    </g>
    </svg>`;

    let buttonPaused = `
    <svg width="12px" height="12px" viewBox="0 0 12 12">
    <g id="pause" stroke-width="1">
        <g transform="translate(-51.000000, -637.000000)">
            <g transform="translate(45.000000, 631.000000)">
                <g transform="translate(6.000000, 6.000000)">
                    <rect x="0.233706271" y="0.83136523" width="3.46639544" height="10.3372695" rx="2"></rect>
                    <rect x="8.29989829" y="0.83136523" width="3.46639544" height="10.3372695" rx="2"></rect>
                </g>
            </g>
        </g>
    </g>
    </svg>`;
        
        return(
            <div className="bg--purple playButton">
                <span dangerouslySetInnerHTML={{__html:  this.props.playing ? buttonPaused : buttonPlaying }} />
            </div>
        )
    }
}

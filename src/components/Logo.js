import React, { Component } from 'react';

export default class Logo extends Component {
    render() {
        return(
            <span dangerouslySetInnerHTML={{__html: `<svg class="logo" viewBox="0 0 24 23">
                <defs>
                    <polygon id="path-1" points="200 23 209.381978 27.5181224 211.699135 37.6702512 205.206605 45.8116264 194.793395 45.8116264 188.300865 37.6702512 190.618022 27.5181224 "></polygon>
                </defs>
                <g>
                    <g transform="translate(-188.000000, -23.000000)">
                        <g>
                            <use fill-rule="evenodd" xlink:href="#path-1"></use>
                        </g>
                    </g>
                </g>
            </svg>` }} />
        )
    }
}

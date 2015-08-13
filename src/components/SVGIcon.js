import React, { Stylesheet, Component, PropTypes } from 'react';
import icons from './../constants/Icons';

export default class SVGIcon extends Component {
    render(){
    	let icon = icons[this.props.icon];
    	
		return (
			<span><span dangerouslySetInnerHTML={{__html: icon}} /></span>
		)
    }
}

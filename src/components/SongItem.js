import React, {Component} from 'react';
import * as gs from './../styles';
import Radium from 'radium';
import { secondsToTime } from './../util/'

export default class SongList extends Component {
	render() {
		const { item, idx, clickHandler } = this.props;
		return(
			<div className="flex--container pa1 border-bottom" key={idx}>
                <div className="mr2">
                    <img src={item.artwork_url || item.user.avatar_url} />
                </div>
				<div className="flex--1">
			 		<h4 className="fw--normal m0">{item.title}</h4>
			 		<p className="m0 color--light">{item.user.username}, {secondsToTime(item.duration)}</p>
			 	</div>
			 	<div className="ta--right ml1">
			 		<a style={gs.buttonsDark} onClick={clickHandler} href="#">Play</a>
			 	</div>
			</div>
		)
	}
}

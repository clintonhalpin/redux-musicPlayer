import React, {Component} from 'react';
import * as gs from './../styles';
import Radium from 'radium';
import { secondsToTime } from './../util/'

@Radium
export default class SongList extends Component {
	render() {
		const { item, idx, clickHandler } = this.props;
		return(
			<li style={[styles.listItem]} key={idx}>
				<img style={[gs.m._r2]} src={item.artwork_url || item.user.avatar_url} />
				<div style={styles.cells}>
			 		<h4>{item.title}</h4>
			 		<p>{item.user.username}, {secondsToTime(item.duration)}</p>
			 	</div>
			 	<div style={[styles.cells, gs.ta.right]}>
			 		<a style={gs.buttonsDark} onClick={clickHandler} href="#">Play</a>
			 	</div>
			</li>
		)
	}
}

let styles = {
	listItem: {
		textAlign: 'left',
		padding: '1rem',
		display: 'flex',
		':hover': {
			backgroundColor: gs.colors.selected,
			cursor: 'poiner'
		},
	},
	cells: {
		flexGrow: 1
	}
}
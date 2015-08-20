import React, {Component} from 'react';
import * as gs from './../styles';
import Radium from 'radium';

@Radium
export default class SongList extends Component {
	handleClick(id) {
		this.props.setSong(id);
	}
	render(){
		const { songs, setSong } = this.props;
		const SongList = songs.map((item, idx) => {
			return (
				<li style={[styles.listItem]} key={idx}>
					<img style={[gs.m._r2]} src={item.artwork_url || item.user.avatar_url} />
					<div style={styles.cells}>
				 		<p>{item.title}</p>
				 	</div>
				 	<div style={[styles.cells, gs.ta.right]}>
				 		<a onClick={() => this.handleClick(item.id)} href="#">Play</a>
				 	</div>
				</li>
			)
		})

		return(
			<ul style={[gs.m._0, gs.p._0]}>
				{SongList}
			</ul>
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
import React, {Component} from 'react';
import * as gs from './../styles';
import Radium from 'radium';

@Radium
export default class SongList extends Component {
	render(){
		const { songs } = this.props;

		const SongList = songs.map((item, idx) => {
			return (
				<li style={[{listStyleType: 'none'}, gs.ta.left, gs.p._t1, gs.p._b2, gs.d.flex]}key={idx}>
					<img style={[gs.m._r2]} src={item.artwork_url || item.user.avatar_url} />
				 	<p>{item.title}</p>
				 </li>
			)
		})

		return(
			<ul style={[gs.m._0]}>
				{SongList}
			</ul>
		)
	}
}
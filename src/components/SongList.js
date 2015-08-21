import React, {Component} from 'react';
import * as gs from './../styles';
import Radium from 'radium';
import { secondsToTime } from './../util/'
import SongItem from './SongItem'
@Radium
export default class SongList extends Component {
	constructor(props) {
		super(props)
	}
	handleClick(id) {
		event.preventDefault();
		this.props.setSong(id);
	}
	componentWillRecieveProps(nextProps) {
		this.props = nextProps;
	}
	render(){
		const { songs, setSong } = this.props;
		return(
		<ul style={[gs.m._0, gs.p._0]}>
			{ 
				songs.map((item, idx) => { 
					return (
						<SongItem item={item} idx={idx} clickHandler={() => this.handleClick(item.id)} />
					) 
				}) 
			}	
		</ul>
		)
	}
}
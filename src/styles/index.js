import * as gs from 'react-gs';

const colors = {
	white: 'white',
	purple: '#AB00CA',
	selected: '#F6F6F6'
}

const buttons = {
	paddingLeft: gs.p._1.padding,
	paddingRight: gs.p._1.padding,
	paddingTop:gs.p._1.padding / 2,
	paddingBottom:gs.p._1.padding / 2,
	backgroundColor: colors.white,
	border: 0,
	borderRadius: gs.p._1.padding / 4,
	fontSize: gs.fs.medium.fontSize
}

const styles = {
	...gs,
	colors,
	buttons
}

export default styles;
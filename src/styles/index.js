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
	fontSize: gs.fs.medium.fontSize,
	textDecoration: 'none'
}

const buttonsDark = {
	...buttons,
	backgroundColor: colors.purple,
	color: colors.white
}

console.log(buttonsDark)

const styles = {
	...gs,
	colors,
	buttons,
	buttonsDark
}

export default styles;
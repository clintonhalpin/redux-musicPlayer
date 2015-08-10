import React, { Component } from 'react';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

export default class Debugger extends React.Component{
	render(){
		return(
			<DebugPanel top left right>
			<DevTools store={store}
			monitor={LogMonitor} />
			</DebugPanel>
		)
	}
}
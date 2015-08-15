import React from 'react';
import { createStore } from 'redux';
import tracksAppStore from './flux/reducers';
import * as constants from './flux/constants';
import * as actions from './flux/actions';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import Root from './containers/Root';
import './styles/index.css'

React.render(
  <Root history={new BrowserHistory()} />,
  document.getElementById('root')
);


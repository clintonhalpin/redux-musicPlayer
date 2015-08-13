import React from 'react';
import Root from './containers/Root';
import History from 'react-router/lib/BrowserHistory';

const history = new History();

React.render(
  <Root history={history}/>,
  document.getElementById('root')
);
'use strict';

import React from 'react';
import { Router, Route } from 'react-router';
import MusicPlayerApp from './MusicPlayerApp';

class AppRouter extends React.Component {
  render() {
    return (
      <Router {...this.props}>
        <Route path="/" component={MusicPlayerApp} />
      </Router>
    );
  }
}

AppRouter.propTypes = {
  history: React.PropTypes.object.isRequired
};

export default AppRouter;
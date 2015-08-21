import React, { Component, PropTypes } from 'react';
import router from 'react-router';
import { connect } from 'react-redux';
import * as gs from './../styles/';
import Radium from 'radium';
import * as actionCreators from './../flux/actions';
import { bindActionCreators } from 'redux';
import { getQueryParameterByName } from './../util';

@Radium
class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { actions, isLoggedIn } = this.props;
    
    // This is nice because it wraps things up but we need to handle different cases... Auth gets dispatched all the time!
    const token = localStorage.getItem('token') || location.hash.replace('#','').split('&')[0].split('=')[1]; 
    const code = localStorage.getItem('code') || getQueryParameterByName('code');

    if(location.hash || token && code) {
      actions.authenticate(code, token)
    }

    if(this.props.songs.length === 0) {
      actions.fetchSongsIfNeeded()
    }
  }

   componentWillReceiveProps(nextProps) {

    if (nextProps.isLoggedIn && this.context.router.state.location.pathname === '/') {
      this.context.router.transitionTo('player');
    }
  }

  render() {
    const { location, children, actions } = this.props;

    let isHomePage = location.pathname === '/';

    return (
      <div style={[{backgroundColor: isHomePage ? '#B10DC9' : 'white', height: '100%'}]}>
        <h1 style={[gs.ta.center, gs.p._t1, gs.p._b2, gs.fw.normal, {color: isHomePage ? 'white': '#222'}, gs.m._0]}>tracks</h1>
        {children}
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.func.isRequired
};

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

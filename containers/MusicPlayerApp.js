import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import MainSection from '../components/MainSection';
import * as MusicPlayerActions from '../actions/MusicPlayerActions';

export default class PokedexApp extends Component {
  render() {
    return (
      <Connector select={state => ({ musicPlayerStore : state  })}>
        {this.renderChild}
      </Connector>
    );
  }

  renderChild({ musicPlayerStore, dispatch }) {

    const actions = bindActionCreators(MusicPlayerActions, dispatch);
    return (
      <div>
        <MainSection {...musicPlayerStore} actions={actions} />
      </div>
    );
  }
}

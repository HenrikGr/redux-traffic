/*
 * Description: Traffic light button component
 *
 * In this module, the code for the Buttons component you can see how the
 * buttons initiate state changes.
 *
 * When a button is rendered, it obtains a reference to the application state by
 * calling the Redux store's getState() method.
 *
 * The Buttons component then uses the state to configure the disabled state of the buttons.
 *
 * When the user clicks a button, the button's onClick() callback calls the Redux
 * store's dispatch() method, passing an appropriate action.
 *
 * The component subscribe to the Redux store and uses forceUpdate to reflect state changes
 * to the buttons.
 *
 *
 * Author:  Henrik
 * File:    
 * Version: 0.0.1
 *
 * Created: 2016-10-18
 */
'use strict';

// Modeule dependencies
import React, { Component } from 'react';

// Import actions
import { goAction, cautionAction, stopAction } from './actions';

/**
 * Button component
 */
export class Buttons extends Component {
  
  // Subscribe to state changes
  componentWillMount() {
    this.props.store.subscribe(() => {
      this.forceUpdate();
    });
  }
  
  render() {
    
    // Get current state from Redux store
    const state = this.props.store.getState();
    
    return(
      <div style={{textAlign: 'center'}}>
        <button
          onClick={() => {this.props.store.dispatch(goAction)}}
          disabled={state == 'GO' || state == 'CAUTION'}
          style={{cursor: 'pointer'}}>
          Go
        </button>
        <button
          onClick={() => {this.props.store.dispatch(cautionAction)}}
          disabled={state == 'CAUTION' || state == 'STOP'}
          style={{cursor: 'pointer'}}>
          Caution
        </button>
        <button
          onClick={() => {this.props.store.dispatch(stopAction)}}
          disabled={state == 'STOP' || state == 'GO'}
          style={{cursor: 'pointer'}}>
          Stop
        </button>
      </div>
    )
  }
}
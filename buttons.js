/*
 * Description:
 *
 * In this module, the code for the Buttons component — you can see how the buttons initiate state changes.
 *
 * When a button is rendered, it obtains a reference to the application state by calling the Redux store's getState()
 * method. The Buttons component then uses the state to configure the disabled state of the buttons.
 *
 * When the user clicks a button, the button's onClick() callback calls the Redux store's dispatch() method,
 * passing an appropriate action.
 *
 * Author:  Henrik
 * File:    
 * Version: 0.0.1
 *
 * Created: 2016-10-18
 */
'use strict';

import React, { Component } from 'react';
import { goAction, cautionAction, stopAction } from './actions';


export class Buttons extends Component {
  
  // Ssubscribe to the redux store on a component level, which is better than letting the App component
  // subscribe on the whole redux store.
  // We are using react forceUpdate when the store changes.
  componentWillMount() {
    this.props.store.subscribe(() => {
      this.forceUpdate();
    });
  }
  
  render() {
    const state = this.props.store.getState();
    
    return(
      <div style={{textAlign: 'center'}}>
        <button onClick={() => {this.props.store.dispatch(goAction)}}
                disabled={state == 'GO' || state == 'CAUTION'}
                style={{cursor: 'pointer'}}>
          Go
        </button>
        
        <button onClick={() => {this.props.store.dispatch(cautionAction)}}
                disabled={state == 'CAUTION' || state == 'STOP'}
                style={{cursor: 'pointer'}}>
          Caution
        </button>
        
        <button onClick={() => {this.props.store.dispatch(stopAction)}}
                disabled={state == 'STOP' || state == 'GO'}
                style={{cursor: 'pointer'}}>
          Stop
        </button>
      </div>
    )
  }
}
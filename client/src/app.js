/*
 * Description: The app components
 *
 * The App component imports and renders two other components
 * - Stoplight
 * - Buttons
 * and passes the Redux store to these child components.
 *
 * Author:  Henrik
 * File:    
 * Version: 0.0.1
 *
 * Created: 2016-10-17
 */
'use strict';

import React, { Component } from 'react';
import StoplightContainer from './stoplight-container';
import ButtonContainer from './button-container';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import { logger } from './middleware';


export class App extends Component {
  render() {
    
    
    const store = createStore(reducer, compose(applyMiddleware(logger),
      window.devToolsExtension ? window.devToolsExtension() : f => f));
    
    return(
      <div>
        <StoplightContainer store={store}/>
        <ButtonContainer store={store}/>
      </div>
    )
  }
}
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


export class App extends Component {
  render() {
    
    return(
      <div>
        <StoplightContainer/>
        <ButtonContainer/>
      </div>
    )
  }
}
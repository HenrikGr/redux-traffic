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

// Module dependencies
import React, { Component } from 'react';

// Import Stoplight component
import { Stoplight } from './stoplight';

// Import Buttons component
import { Buttons } from './buttons';

/**
 * App component
 */
export class App extends Component {
  render() {
    return(
      <div>
        <Stoplight store={this.props.store} />
        <Buttons store={this.props.store} />
      </div>
    )
  }
}
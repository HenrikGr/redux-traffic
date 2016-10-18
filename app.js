/*
 * Description: This is the entry point of the application.
 *
 * The App component imports and renders two other components —Stoplight and the row of Buttons— and passes the
 * Redux store to these child components.
 *
 *
 *
 * Author:  Henrik
 * File:    
 * Version: 0.0.1
 *
 * Created: 2016-10-17
 */
import React, { Component } from 'react';
import { Stoplight } from './stoplight';
import { Buttons } from './buttons';

export class App extends Component {
  render() {
    return(
      <div>
        <Stoplight store={this.props.store} />
        <Buttons   store={this.props.store} />
      </div>
    )
  }
}
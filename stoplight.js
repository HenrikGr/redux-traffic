/*
 * Description:
 *
 * Stoplight, which is a React stateless functional component, renders SVG circles
 * whose color depends on the application's state.
 *
 * The component obtains the state from the store's getState() method and subsequently
 * uses one of three helper methods to turn the state into a color.
 *
 * The component subscribe to the Redux store and uses forceUpdate to reflect state changes
 * to the svg image.
 *
 *
 * Author:  Henrik
 * File:    
 * Version: 0.0.1
 *
 * Created: 2016-10-18
 */
'use strict';

// Module dependencies
import React, { Component } from 'react';

// Helper function to change color of svg image
const stopColor = (store) => {
  return store.getState() == 'STOP' ? 'red' : 'white';
};

// Helper function to change color of svg image
const cautionColor = (store) => {
  return store.getState() == 'CAUTION' ? 'yellow' : 'white';
};

// Helper function to change color of svg image
const goColor = (store) => {
  return store.getState() == 'GO' ? 'rgb(39,232,51)' : 'white';
};

/**
 * Stoplight component
 */
export class Stoplight extends Component {
  
  // Subscribe to state changes
  componentWillMount() {
    this.props.store.subscribe(() => {
      this.forceUpdate();
    });
  }
  
  render() {
    return(
      <div style={{textAlign: 'center'}}>
        <svg height='170'>
          <circle
            cx='145' cy='60' r='15'
            fill={stopColor(this.props.store)}
            stroke='black'/>
          
          <circle
            cx='145' cy='100' r='15'
            fill={cautionColor(this.props.store)}
            stroke='black'/>
          
          <circle
            cx='145' cy='140' r='15'
            fill={goColor(this.props.store)}
            stroke='black'/>
        </svg>
      </div>
    )
  }
}
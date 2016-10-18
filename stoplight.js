/*
 * Description:
 *
 * Stoplight, which is a React stateless functional component, renders SVG circles whose color depends on the
 * application's state. The component obtains the state from the store's getState() method and subsequently uses
 * one of three helper methods to turn the state into a color.
 *
 * Author:  Henrik
 * File:    
 * Version: 0.0.1
 *
 * Created: 2016-10-18
 */
'use strict';

import React, { Component } from 'react';

const stopColor = (store) => {
  return store.getState() == 'STOP' ? 'red' : 'white';
};

const cautionColor = (store) => {
  return store.getState() == 'CAUTION' ? 'yellow' : 'white';
};

const goColor = (store) => {
  return store.getState() == 'GO' ? 'rgb(39,232,51)' : 'white';
};


export class Stoplight extends Component {
  
  // Ssubscribe to the redux store on a component level, which is better than letting the App component
  // subscribe on the whole redux store.
  // We are using react forceUpdate when the store changes.
  componentWillMount() {
    this.props.store.subscribe(() => {
      this.forceUpdate();
    });
  }
  
  render() {
    return(
      <div style={{textAlign: 'center'}}>
        <svg height='170'>
          <circle cx='145' cy='60' r='15'
                  fill={stopColor(this.props.store)}
                  stroke='black'/>
          
          <circle cx='145' cy='100' r='15'
                  fill={cautionColor(this.props.store)}
                  stroke='black'/>
          
          <circle cx='145' cy='140' r='15'
                  fill={goColor(this.props.store)}
                  stroke='black'/>
        </svg>
      </div>
    )
  }
}
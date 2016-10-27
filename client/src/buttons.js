/*
 * Description: Button component
 *
 * The Buttons component uses its go, caution, and stop properties, which are all functions, as callbacks for
 * each button's onClick handler. Those properties come from the ButtonContainer component.
 *
 * Notice that, like the Stoplight component, the Buttons component is a functional stateless component.
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


export const Buttons = ({go,caution,stop,lightStatus}) => {
  return(
    <div style={{textAlign: 'center'}}>
      <button
        onClick={go}
        disabled={lightStatus == 'GO' || lightStatus == 'CAUTION'}
        style={{cursor: 'pointer'}}>
        Go
      </button>
      
      <button
        onClick={caution}
        disabled={lightStatus == 'CAUTION' || lightStatus == 'STOP'}
        style={{cursor: 'pointer'}}>
        Caution
      </button>
      
      <button
        onClick={stop}
        disabled={lightStatus == 'STOP' || lightStatus == 'GO'}
        style={{cursor: 'pointer'}}>
        Stop
      </button>
    </div>
  )
};
/*
 * Description: Stoplight component, which is a stateless functional component that renders SVG circles.
 *
 * The component obtains its properties from the StoplightContainer component.
 *
 *
 * Author:  Henrik
 * File:    
 * Version: 0.0.1
 *
 * Created: 2016-10-18
 */
'use strict';

import React, { Component } from 'react';


export const Stoplight = ({goColor,cautionColor,stopColor}) => {
  return(
    <div style={{textAlign: 'center'}}>
      <svg height='170'>
        <circle
          cx='145' cy='60' r='15'
          fill={stopColor}
          stroke='black'/>
        
        <circle
          cx='145' cy='100' r='15'
          fill={cautionColor}
          stroke='black'/>
        
        <circle
          cx='145' cy='140' r='15'
          fill={goColor}
          stroke='black'/>
      </svg>
    </div>
  )
};
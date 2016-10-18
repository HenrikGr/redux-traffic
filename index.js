/*!
 * Description: The application entry point module
 *
 * When the application starts, it creates a Redux store with the application's reducer. *
 * Notice that the code sets the Redux store to an App property of the same name.
 *
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */
'use strict';

// Modeule dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import the reducer
import reducer from './reducer';

// Import App component
import { App } from './app';

// Render App
ReactDOM.render(<App store={createStore(reducer, composeWithDevTools())}/>,
  document.getElementById('root'));




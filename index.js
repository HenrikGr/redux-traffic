/*!
 * Description: The application entry point module
 *
 * Properties that you specify for Provider become automatically available to any React components contained in the
 * Provider component. In this case, the App component — and the StoplightContainer and ButtonContainer components
 * contained in the App component — automatically have access to the Redux store.
 *
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */
'use strict';

// Module dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducer';
import { App } from './app';

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

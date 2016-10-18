/*!
 * Description: The application entry point module
 *
 * When the application starts, it creates a Redux store with the application's reducer. *
 *
 * Notice that the code sets the Redux store to an App property of the same name.
 *
 * Notice, we use subscription to the redux store on a component level , which is better than letting the App component
 * subscribe on the whole redux store. In the components that subscribe to the redux store we use react forceUpdate
 * when the store changes.
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */
'use strict';

'use strict';

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




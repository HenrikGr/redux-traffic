/*
 * Description: Module for the reducer, which manage the application state.
 *
 *
 * Author:  Henrik
 * File:    
 * Version: 0.0.1
 *
 * Created: 2016-10-18
 */
'use strict';

/**
 * The application's state — in this case, a string whose value is either GO, STOP, or CAUTION— is created by the
 * reducer() function.
 *
 * The reducer() function returns a new state given the current state and an action that describes a state change.
 * Notice that the reducer() function returns GO when the state is undefined, as is initially the case.
 *
 * @param state
 * @param action
 */
const reducer = (state = 'GO', action) => {
  switch(action.type) {
    case 'GO':
      state = 'GO';
      break;
    
    case 'STOP':
      state = 'STOP';
      break;
    
    case 'CAUTION':
      state = 'CAUTION';
      break;
  }
  return state;
};

export default reducer;
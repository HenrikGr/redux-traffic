/*
 * Description: 
 *
 * Author:  Henrik
 * File:    
 * Version: 0.0.1
 *
 * Created: 2016-10-27
 */
/**
 * thunk middleware
 * @param store
 */
export const thunk = (store) => (next) => (action) => {
  if (action.fn && typeof action.fn === 'function') {
    action.fn(store.dispatch, store.getState()); // invoke the action
  } else {
    return next(action); // dispatch normally
  }
};

/**
 * Logger middleware
 * @param store
 */
export const logger = store => next => action => {
  console.log('MIDDLEWARE: Executing action ' + action.type);
  return next(action);
};

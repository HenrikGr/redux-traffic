/*
 * Description: Actions for the application
 *
 * Author:  Henrik
 * File:    
 * Version: 0.0.1
 *
 * Created: 2016-10-18
 */

/**
 * Action when state = 'CAUTION'
 * @type {{type: string}}
 */
const cautionAction = {
  type: 'CAUTION'
};

/**
 * Action when state = 'GO'
 * @type {{type: string}}
 */
const goAction = {
  type: 'GO'
};

/**
 * Action when state = 'STOP'
 * @type {{type: string}}
 */
const stopAction = {
  type: 'STOP'
};

export { cautionAction, goAction, stopAction };
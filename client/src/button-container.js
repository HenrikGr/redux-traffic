/*
 * Description: Button container component.
 *
 * The ButtonContainer component maps the current state to a Buttons property named lightStatus.
 * The light status is simply the value of the state (GO, CAUTION, or STOP).
 *
 *
 * Author:  Henrik
 * File:    
 * Version: 0.0.1
 *
 * Created: 2016-10-19
 */
'use strict';

// Module dependencies
import { connect } from 'react-redux';

// Import button component
import { Buttons } from './buttons';

// Import actions
import { goAction, cautionAction, stopAction } from './actions';

// Map state to props helper function
const mapStateToProps = state => {
  return {
    lightStatus: state
  }
};

const mapDispatchToProps = dispatch => {
  return {
    go: () => { dispatch(goAction) },
    caution: () => { dispatch(cautionAction) },
    stop: () => { dispatch(stopAction) }
  }
};

// Map the application state and dispather function to button properties
const ButtonContainer = connect(mapStateToProps,mapDispatchToProps)(Buttons);

/**
 * Export the Button container component
 */
export default ButtonContainer;
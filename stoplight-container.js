/*
 * Description: Stoplight container component
 *
 * The stoplight container component connects to the Redux store and maps application state to properties of the
 * stoplight component that it contains.
 *
 * The application state is either
 * - GO,
 * - CAUTION, or
 * - STOP,
 * and the stoplight's properties are
 * - goColor,
 * - cautionColor, and
 * - stopColor.
 *
 * By default, each of the stoplight's three properties is white.
 *
 * When the state is GO, the stoplight container maps the stoplight's goColor property to green.
 * When the state is CAUTION, the caution color maps to yellow.
 * When the state is STOP, the stop color maps to red.
 *
 * To map application state to stoplight properties, we are using the react-redux bindings' connect() function to
 * connect a StoplightContainer to the Redux store. By calling the connect() function and subsequently passing
 * Stoplight to the function that connect() returns, Redux automatically updates the Stoplight whenever the state in
 * the Redux store changes.
 *
 * You don't need to do anything other than call connect() to make that happen.
 * When the store changes, Redux calls the StoplightContainer's mapStateToProps() method.
 * Redux copies the values of the properties of the object returned by StoplightContainer.mapStateToProps() to the
 * stoplight enclosed in the StoplightContainer.
 *
 * The connect() method accepts two parameters, both of which are functions.
 * The first function maps state from the Redux store to properties of the contained component (in this case, Stoplight).
 * The second function maps Redux dispatch calls to properties; however, the stoplight doesn't initiate any behavior,
 * so the stoplight container doesn't map dispatch calls to properties. As a result, the stoplight container's
 * mapDispatchToProps function is null.
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

// Import stateless stoplight components
import { Stoplight } from './stoplight';

// Map state to props helper function
const mapStateToProps = state => {
  return {
    goColor: state == 'GO' ? 'rgb(39,232,51)' : 'white',
    cautionColor: state == 'CAUTION' ? 'yellow' : 'white',
    stopColor: state == 'STOP' ? 'red' : 'white'
  }
};

const mapDispatchToProps = null;

// Map the application state to stoplight properties.
const StoplightContainer = connect( mapStateToProps, mapDispatchToProps )(Stoplight);

/**
 * Export the Stoplight Container component.
 */
export default StoplightContainer;
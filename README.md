# redux-traffic stoplight demo

This app demonstrate how to use the manage state with Redux.

Redux API

The Redux API is simple, consisting of only five top-level functions;

- Object createStore(reducer, initialState) - Create the Redux store.
- Object combineReducers(reducers) - Combine several reducers into one.
- Object compose(...functions) - Compose functions, left to right.
- void applyMiddleware(...middlewares) - Apply Redux middleware.
- Object bindActionCreators(actionCreators, dispatch) - Bind several action creators to the dispatch function.

Redux maintains a reference to a single reducer that's in charge of computing the entire state of 
the application. But maintaining a single reducer function in complex applications can be difficult, 
especially when a team of developers is working together. The combineReducers() function, as its name implies, 
combines several reducer functions into one. You can then control the level of granularity of your 
reducer functions, and individual developers can work on those functions in isolation.

With the Redux applyMiddleware() function, you can extend Redux through middleware that intercepts dispatch calls. 
That handy facility makes it possible to implement all kinds of cross-cutting concerns, 
from logging to asynchronous actions.

Redux supports action creators, functions that create actions. The bindActionCreators() function binds action 
creators to the Redux dispatch() function, making it easy to compose action creators.

The createStore() function creates the Redux store, given the application's reducer. 
Notice that you can also pass the createStore() function the initial application state. 

Once you have a reference to the store, you can call the object's methods:
- Object getState() returns the current state of the application.
- void dispatch(Objectaction) dispatches an action, triggering a state change.
- replaceReducer(nextReducer) replaces the reducer for the state tree.
- subscribe(Functioncallback) causes Redux to call the callback method for every dispatch.

That's all there is to the Redux API.

RUN THE APPLICATION

clone repository

npm install

npm start
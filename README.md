# redux-traffic stoplight demo

Redux API

The Redux overall API is simple, consisting of only five top-level functions (one of which, Redux.createStore(), 
you already know about):
1. Object createStore(reducer, initialState) - Create the Redux store.
2. Object combineReducers(reducers) - Combine several reducers into one.
3. Object compose(...functions) - Compose functions, left to right.
4. void applyMiddleware(...middlewares) - Apply Redux middleware.
5. Object bindActionCreators(actionCreators, dispatch) - Bind several action creators to the dispatch function.

Recall that Redux maintains a reference to a single reducer that's in charge of computing the entire state of 
the application. But maintaining a single reducer function in complex applications can be unwieldy, 
especially when a team of developers is working together. The combineReducers() function, as its name implies, 
combines several reducer functions into one. You can then control the level of granularity of your 
reducer functions, and individual developers can work on those functions in isolation.

With the Redux applyMiddleware() function, you can extend Redux through middleware that intercepts dispatch calls. 
That handy facility makes it possible to implement all kinds of cross-cutting concerns, 
from logging to asynchronous actions.

Redux supports action creators, functions that create actions. The bindActionCreators() function binds action 
creators to the Redux dispatch() function, making it easy to compose action creators.

And as you've seen, the createStore() function creates the Redux store, given the application's reducer. 
Notice that you can also pass the createStore() function the initial application state. 
Once you have a reference to the store, you can call the object's methods:
- Object getState() returns the current state of the application.
- void dispatch(Objectaction) dispatches an action, triggering a state change.
- replaceReducer(nextReducer) replaces the reducer for the state tree.
- subscribe(Functioncallback) causes Redux to call the callback method for every dispatch.

That's all there is to the Redux API.


This repository contain an implementation of a traffic stoplight application. 
To run the application, first install `Node.js` and `npm`.  
Then run `npm install`, which may take a few minutes, followed by `npm start`. 
The application is available at `http://localhost:9090`. 
If you open the developer tools, you will see lots of `eslint` warnings. 
See `.eslintrc` for details.

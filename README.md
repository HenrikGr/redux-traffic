# redux-traffic stoplight demo

This app demonstrate how to use the manage state with Redux and how to use React together with Redux.

**Redux API**

The Redux API is simple, consisting of only five top-level functions;

- Object createStore(reducer, initialState) - Create the Redux store.
- Object combineReducers(reducers) - Combine several reducers into one.
- Object compose(...functions) - Compose functions, left to right.
- void applyMiddleware(...middlewares) - Apply Redux middleware.
- Object bindActionCreators(actionCreators, dispatch) - Bind several action creators to the dispatch function.

Redux maintains a reference to a single reducer that's in charge of computing the entire state of the application. 
However, maintaining a single reducer function in complex applications can be difficult, especially when a team of 
developers is working together. The combineReducers() function, as its name implies, combines several reducer 
functions into one. You can then control the level of granularity of your reducer functions, and individual developers 
can work on those functions in isolation.

With the Redux applyMiddleware() function, you can extend Redux through middleware that intercepts dispatch calls. 
That handy facility makes it possible to implement all kinds of cross-cutting concerns, from logging to 
asynchronous actions.

Redux supports action creators, functions that create actions. The bindActionCreators() function binds action creators 
to the Redux dispatch() function, making it easy to compose action creators.

The createStore() function creates the Redux store, given the application's reducer. 
Notice that you can also pass the createStore() function the initial application state. 

Once you have a reference to the store, you can call the object's methods:
- Object getState() returns the current state of the application.
- void dispatch(Objectaction) dispatches an action, triggering a state change.
- replaceReducer(nextReducer) replaces the reducer for the state tree.
- subscribe(Functioncallback) causes Redux to call the callback method for every dispatch.

That's all there is to the Redux API.


**Using the react-redux bindings**

Redux bindings are available on GitHub for several popular frameworks, including React, Angular, and Vue. 
The bindings make it easy to integrate Redux into applications built with those frameworks.

The react-redux bindings give you access to an API that includes a React component and a JavaScript method:
- The Provider component provides access to the Redux store for components contained in the Provider component.
- The void connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options]) function connects a 
  React presentation component to the Redux store.

For more information, se the stoplight and button container components and their relation to the stateless
functional components stoplight and buttons.


**Separation of presentation components and container components**

Not only do the react-redux bindings provide an automatic connection to the Redux store, but they also help to 
enforce good programming practice by separating concerns between containers and their associated stateless components. 
Container components implement 
- mapStateToProps(), which maps state to data; and 
- mapDispatchToProps(), which maps state to behavior. 

This separation has several benefits:
- Presentation components are simple to implement and reason about.
- Presentation components are easy to test, because they don't mutate data.
- Presentation components can be reused with different data sources.
- Container components are easy to test, because they lack presentation code.


**Redux Providers**

One pleasant side effect of using Redux's connect() function is that stateless functional components such as Stoplight 
and Buttons no longer need to access the Redux store directly — because those components no longer compute their 
properties from state. Instead, the corresponding container components provide the glue between the Redux store and an 
application's stateless functional components. That arrangement makes the stateless functional components, such as 
the final versions of Stoplight and Button, much easier to test.

However, the container components still access application state to map it to the properties of the container's 
enclosed stateless component. To make the Redux store available to the application's React components, you can 
explicitly pass it down the component hierarchy, or you can use the Provider, as shown in index.js.

The Provider component is a convenience so you don't need to manually pass the store as a property throughout 
application your component hierarchy. Components that you nest inside the Provider component automatically have 
access to the Redux store. The connect() function connects a presentation component to the Redux store, so that 
the component is updated whenever the store changes.

**Whats next?**

This application shows the concept of using redux and react-redux, the next application should cover topics such as;
- Implementing and using action creators
- Combining reducers
- Creating asynchronous actions
- Implementing undo and redo
- Implementing a state timeline

Check out the redux-book repository form more information.

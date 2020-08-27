## React Hooks

### `What is React Hooks?`
    => Its a new feature added in version 16.8. which allow you to use React fetures without having to write a class.
        Ex: State of a component. Previosly versions before 16.8 State and Props are accessiable in Class Components.
    => Hooks wont work inside classes.


### `Why React Hooks?`
    
    => Uderstand how `this` keyword works in JavaScript.
    => Remember to bind event handlers in class components.
    => Classes dont minify very well and make ht reloading very unreliable.

    => There is no particular way to reuse stateful component logic.
    => HOC and render props patterns do address this problems.
        - Previously we are sharing the data across the components by wrapping HOC component.
    => There is need a to share stateful logic in better way.
        - Now we can share the logic accross the components in different & easy way.
    
    => Create components for complex scenarios such as data fetching and subscribing to events.
    => Related code is not organized in one place.
        Ex: Data fetching: In componentDidMount and componentDidUpdate
        Ex: Event listeners : In componentDidMount and componentDidUnmount
    => Because of stateful logic - Cannot break components into smaller ones.

    => 


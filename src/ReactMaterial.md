## React Hooks

### `What is React Hooks?`
    => Its a new feature added in version 16.8. which allow you to use React fetures without having to write a class.
        Ex: State of a component. Previosly versions before 16.8 State and Props are accessiable in Class Components.
    => Hooks wont work inside classes.

### `Rules while using Hooks?`
    => Only call Hooks at the Top Level
        - Dont call Hooks inside loops, conditions, or nested functions.
    => ONly call Hooks frm React Functions
        - Call them from with in Reac functional components and nit hust regular JavaScript function.

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
    => With the use of useState Hook, the state doesn't have to be an object. It can be any type like number, boolean, array, string... ect.,.
    => useState hook returns an array with 2 elements:
        - 1st element is current value of the state
        - 2nd element is a state setter function
    => If the New state value depends on the previous state value? You can pass a function to the setter function.
    => When deling with objects or arrays, always make sure to spreadyour state variable and then call the setter function.
### `useState Hook`

    => Previously if you want to use state in component you need to Class.`eject`
    => Now we can use state in Funcional Components with the help of  `useState`.
        Ex: Lets see an example 1st in Class Component and same thing convert it into Function Component using useState.
    => Import useState from 'react' and call the  useState() in function.
        - This Hook / Function accepts the initial value of the state propery and returns current value of the state property and the method that is capable  of updating that state property.
            Ex: const [count, setCount] = useState(0)
                -> count is the variable that accepting initial value 0.
                -> setCount is the function we are creating using useState.
        Refer:
            ClassuseStateCounter1.js
            HookuseStateCounter1.js

### `useState with previous state`
    => Here will see how to set state using previous value
    Refer: HookuseStateCounter2.js

### `useState with object`
    => useState will not automatically merge the object value changes. To achieve this in useState we need to use spread operator(...)
        Ex:  <input type='text' value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} ></input>
            - { ...name, firstName: e.target.value } this expression explains,Copy every property in the 'name' object and then just override the firstName field in the 'name' object. 
    => setState in class components will merge the oject change automatically.
    Refer: HookuseStateObjectCounter3.js

### `useState with array`
    => useState will not automatically apped the object in the list using set statement. To achieve this need to use spread operator(...)
        Ex: setItems([...items, {
                                    id: items.length,
                                    value: Math.floor(Math.random() * 10) + 1
                                }
                     ])
    Refer: HookuseStateArrayCounter4.js

### `useEffect`
    => The Effect Hook lets you perform side effects in functional Components.
    => It is a close replacement for `componentDidMound, comonentDidUpdate and componentWillUnmout`
    => useEffect accepts 1 parameter as a function, this function executed after every render of the component.
    => This function triggers for evey change in the component. It create performance issue.
    => We can do conditionally trigger the useEffect() function.
        - useEffect accepts 2nd argument also as an array. This array we need to provide the props and state for which propry changes useEffect() executes.
    => Still we can make to run useEffect() only once. For this we just need to pass empty array [] in 2nd argument
        Ex:     useEffect(() => {
                    console.log(`UseEffectFuncCompRunOnce5: useEffect called`)
                    window.addEventListener('mousemove', logMousePosition)
                }, [])
    => We can unmount the component using useEffect() function, same like in Class Components we use to call componentWillUnmout() to unmount the componet.
    => useEffect() function having retruns function, here we can unmount the component or subscriobtion events
        Ex: useEffect(() => {
                console.log(`UseEffectFuncCompRunOnce5: useEffect called`)
                window.addEventListener('mousemove', logMousePosition)

                return () => { // This is for Unmounting
                    console.log(`UseEffectFuncCompRunOnce5: useEffect Unmounting`)
                    window.removeEventListener('mousemove', logMousePosition)

                }
            }, [])
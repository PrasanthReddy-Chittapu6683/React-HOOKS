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
    - This Hook / Function accepts the initial value of the state propery and returns current value of the state property and the method that is capable of updating that state property.
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
    Ex: `<input type='text' value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} ></input>`
        `- { ...name, firstName: e.target.value }` this expression explains,Copy every property in the 'name' object and then just override the firstName field in the 'name' object. 
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
    Refer: UseEffectClassComponent5.js
           UseEffectFuncComponent5.js
           UseEffectFuncCompRunOnce5.js
           UseEffectIntervalHook5.js
           
### `Fetching data with useEffect`
=> Let see how to fecth data from end poing inside useEffect(). One thing need to remember in future we have new feature called `Suspence` which iresponsiable for data fecthing.
=> First install `axios`. `(cmd: npm install axios)`
=> Here am going to use online API call for data fetching `(url: https://jsonplaceholder.typicode.com/ & https://jsonplaceholder.typicode.com/posts)`
=> While calling API inside the useEffect() dont forget to specicy 2nd argument for dependency list with empty array. If not it will keep calls the API infinite times.
        Ex: useEffect(() => {
                axios.get('https://jsonplaceholder.typicode.com/posts').then(
                    response => {
                        console.log(response.data)
                        setPosts(response.data)
                    }
                ).catch(error => {
                    console.log(error)
                })
                return () => {

                }
            }, [])
    => Let's see how to do  Post call
            Ex: 
                const [ID, setID] = useState(1)
                const [displayData, setDisplayData] = useState({})
                useEffect(() => {
                    axios.get(`https://jsonplaceholder.typicode.com/posts/${ID}`).then(
                        response => {
                            console.log(response.data)
                            setDisplayData(response.data)
                        }
                    ).catch(error => {
                        console.log(error)
                    })
                    return () => {
                        // cleanup
                    }
                }, [ID])
                const setIDFunc = (e) => {
                    setID(e.target.value)
                }
                return (
                    <div>
                        <label>Enter ID to fetch data: </label>
                        <input type='text' onChange={setIDFunc} value={ID} />
                        <table >
                            <thead>
                                <tr>
                                    <td>
                                        ID
                                </td>
                                    <td>
                                        Title
                                </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {displayData.id}
                                    </td>
                                    <td>
                                        {displayData.title}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )

### `useContext`
=> In Class component perviosly we are sharing the data to nested component with out sharing to middle component using Context.
    - Context provides a way to pass through the component tree without having to pass props down manually at each level.
=> Refer the code for how to use Contex in Class Component [React Context](https://github.com/PrasanthReddy-Chittapu6683/ReactJs-V16.13.1/blob/master/reactjs-my-learnings/reactJs.txt)


                        _____
                        | A |
         |------------->|___|
         |                |
         |                |
         |                |
         |                |
         |                |
         |                |
   ______|______        __|__              ____ 
  | AppComponent |----> | B |------------> | D |
  |______________|      |___|              |___|
         |                |
         |                |
         |                |
         |                |
         |                |
         |                |
         |              __|__              _____             _____ 
         |------------> | C |------------> | E |------------>| F |
                        | __|              |___|             |___| 

#### `Steps to use Context object in Class Component`
`Step 1`: Create the context and export it
            export const UserContext = React.createContext();  in APP.js
`Step 2`: Wrap ComponentC6 with Context object provider `UserContext.Provider` and pass username as props
            <UserContext.Provider value={'PRCV'}>
                <ComponentC6></ComponentC6>
            </UserContext.Provider>
`Step 3`: Import Context object in ComponentF6 component and retreive username props using `UserContext.Consumer`
            return (
                <div>
                    <UserContext.Consumer>
                        {
                            user => {
                                return <div> User Context value {user}</div>
                            }
                        }
                    </UserContext.Consumer>
                </div>
            )
#### `Steps to use useContext() HOOK object `
`Step 1`: Import the `UserContext` & `LanguageContext` object in to ComponentE.js file from App.js
`Step 2`: Import `useContext` from `react` in `ComponentF6.js`
`Step 3`: create object of useContext() by passing `UserContext` & `LanguageContext` as an argument
            Ex: const User_Context = useContext(UserContext)
                const Language_Context = useContext(LanguageContext)
`Step 4`: Just use the const values in JSX
            Ex: <div> {Language_Context}, {User_Context}</div>
             




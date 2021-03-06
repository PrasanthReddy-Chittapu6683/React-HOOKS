import React, { useReducer } from 'react'

/**This is the default single state object */
const initialState = 0

function init(initialCount) {
    return initialCount ;
}


/** reducer functoon that takes state & action as a paramerter and return new 'state' object.
 * state: It stores the state object which we decalred above 'const initialState'
 * action: It store the action object what we need to pass throught dispach() function on any event handler
 * retrun: it returns new state object with updated values
*/
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1

        case 'reset':
            return initialState
        default:
            return state
    }
}

function UseReducerCounterOne7() {
    const [count, dispatch] = useReducer(reducer, initialState, init)
    return (
        <div>
            <div>Count :- {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default UseReducerCounterOne7

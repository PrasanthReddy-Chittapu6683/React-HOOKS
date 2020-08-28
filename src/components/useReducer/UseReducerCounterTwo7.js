import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.ValId }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.ValId }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.ValId }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.ValId }

        case 'reset':
            return initialState
        default:
            return state
    }
}

function UseReducerCounterTwo7() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>First Count :- {count.firstCounter}</div>
            <div>Second Count :- {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', ValId: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', ValId: 1 })}>Decrement</button>

            <button onClick={() => dispatch({ type: 'increment', ValId: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement', ValId: 5 })}>Decrement 5</button>

            <div>
                <button onClick={() => dispatch({ type: 'increment2', ValId: 1 })}>Second Increment</button>
                <button onClick={() => dispatch({ type: 'decrement2', ValId: 1 })}>Second Decrement</button>

            </div>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default UseReducerCounterTwo7

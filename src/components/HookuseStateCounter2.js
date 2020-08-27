import React, { useState } from 'react'

function HookuseStateCounter2() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 5)}>Incremet +5</button>
        </div>
    )
}

export default HookuseStateCounter2

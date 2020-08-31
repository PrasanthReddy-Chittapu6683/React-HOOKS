import React, { useState, useEffect } from 'react'

function CounterOneNoHook() {
    const [Count, setCount] = useState(0)
    const IncrementFun = () => {
        setCount(prevCnt => prevCnt + 1)
    }
    const DecrementFun = () => {
        setCount(prevCnt => prevCnt - 1)
    }
    const ResetFun = () => {
        setCount(0)
    }
    return (
        <div>
            <small> Count Value : {Count}</small>
            <button onClick={IncrementFun}>Increase</button>
            <button onClick={DecrementFun}>Decrease</button>
            <button onClick={ResetFun}>Reset</button>

        </div>
    )
}

export default CounterOneNoHook

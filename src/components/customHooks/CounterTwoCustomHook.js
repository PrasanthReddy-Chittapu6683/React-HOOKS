import React, { useState, useEffect } from 'react'
import useCustomHookCounter from './useCustomHookCounter'

function CounterTwoCustomHook() {

    const [Count, IncrementFun, DecrementFun, ResetFun] = useCustomHookCounter(10, 1)

    return (
        <div>
            <small> Count Value using Custom Hook : {Count}</small>
            <button onClick={IncrementFun}>Increase</button>
            <button onClick={DecrementFun}>Decrease</button>
            <button onClick={ResetFun}>Reset</button>

        </div>
    )
}

export default CounterTwoCustomHook

import React, { useContext } from 'react'
import { CountContext } from '../../App'




function UseReducerUseContextD8() {
    const countContext = useContext(CountContext);
    return (
        <div>
            <div>Component D - {countContext.countStateFromApp}
            <button onClick={() => countContext.countDispatchFromAppComp('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatchFromAppComp('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatchFromAppComp('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default UseReducerUseContextD8

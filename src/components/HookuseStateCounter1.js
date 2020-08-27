import React, { useState } from 'react'

function HookuseStateCounter1() {

    const [count, setCount] = useState(0)
     
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click to see the count {count}</button>
        </div>
    )
}

export default HookuseStateCounter1

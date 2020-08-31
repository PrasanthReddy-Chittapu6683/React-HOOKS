import React, { useState, useEffect } from 'react'

function DocTitleOne() {

    const [Count, setCount] = useState(0)
    useEffect(() => {
        document.title = `Increment Count is : ${Count}`;
        return () => {
            // cleanup
        }
    }, [Count])
    return (
        <div>
            <button onClick={() => setCount(Count + 1)}> InCrement Count -{Count}</button>
        </div>
    )
}

export default DocTitleOne

import React, { useState } from 'react'
import useDocumentTilteHook from './useDocumentTilteHook';

function DocTitleTwo() {
    const [Count, setCount] = useState(0)
    useDocumentTilteHook(Count)
    return (
        <div>
            <button onClick={() => setCount(Count + 1)}> InCrement Count Using Custom Hook -{Count}</button>
        </div>
    )
}

export default DocTitleTwo

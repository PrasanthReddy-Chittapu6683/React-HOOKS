import React, { useEffect, useState } from 'react'

function UseEffectFuncComponent5() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
 

    const countFunc = () => {
        document.title = `Cliked ${count} times`
        console.log(`Functinal Component - useEffect() triggering every render of the component`)
    }

    useEffect(countFunc, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />

            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default UseEffectFuncComponent5

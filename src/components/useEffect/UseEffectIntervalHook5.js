import React, { useState, useEffect } from 'react'

function UseEffectIntervalHook5() {
    const [count, setcount] = useState(0)



    useEffect(() => {
        const interval = setInterval(() => {
            setcount(count + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [count])

    return (
        <div>
            seconds: {count}
        </div>
    )
}

export default UseEffectIntervalHook5

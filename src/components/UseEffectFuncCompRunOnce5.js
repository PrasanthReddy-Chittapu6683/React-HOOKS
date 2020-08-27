import React, { useState, useEffect } from 'react'

function UseEffectFuncCompRunOnce5() {
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)
    const logMousePosition = e => {
        console.log(`UseEffectFuncCompRunOnce5: logMousePosition called`)
        setx(e.clientX)
        sety(e.clientY)
    }
    useEffect(() => {
        console.log(`UseEffectFuncCompRunOnce5: useEffect called`)
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log(`UseEffectFuncCompRunOnce5: useEffect Unmounting`)
            window.removeEventListener('mousemove', logMousePosition)

        }
    }, [])

    return (
        <div>
            <small>Calling useEffect only once</small>
            X Postion:{x} - Y Postion: {y}
        </div>
    )
}

export default UseEffectFuncCompRunOnce5

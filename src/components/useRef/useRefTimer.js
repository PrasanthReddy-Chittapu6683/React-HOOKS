import React, { useState, useRef, useEffect } from 'react'

function UseRefTimer() {
    const [Timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(
            () => {
                setTimer(prevTimer => prevTimer + 1)
            }, 1000
        )
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <div>
            useRef Hook Timer - {Timer}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear useRef Timer</button>

        </div>
    )
}

export default UseRefTimer

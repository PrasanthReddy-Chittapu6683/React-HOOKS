import React, { useState, useMemo } from 'react'


function CounterUseMemo10() {

    const [CounterOne, setCounterOne] = useState(0)
    const [CounterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(CounterOne + 1);
    }
    const incrementTwo = () => {
        setCounterTwo(CounterTwo + 1);
    }

    // const isEven = () => {
    //     let i = 0;
    //     while (i < 200000000) i++
    //     return CounterOne % 2 === 0
    // }

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 200000000) i++
        return CounterOne % 2 === 0
    }, [CounterOne])

    return (
        <div>
            <div>
                <button onClick={incrementOne}> Couter One - {CounterOne}</button>
                <span>
                    {isEven ? ' Even' : ' Odd'}
                </span>
            </div>
            <div>
                <button onClick={incrementTwo}> Couter Two - {CounterTwo}</button>
            </div>
        </div>
    )
}

export default CounterUseMemo10

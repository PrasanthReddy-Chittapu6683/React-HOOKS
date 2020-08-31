import React, { useState, useCallback } from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count'

function ParentComponent() {

    const [Age, setAge] = useState(25)
    const [Salary, setSalary] = useState(50000)

    const incrementAge = useCallback(
        () => {
            setAge(Age + 1)
        }, [Age]
    )

    const incrementSalary = useCallback(
        () => {
            setSalary(Salary + 1000)
        },
        [Salary]
    )
   

    return (
        <div>

            <Title />
            <Count text="Age" count={Age} />
            <Button handleClick={incrementAge} >Increment Age </Button>
            <Count text="Salary" count={Salary} />
            <Button handleClick={incrementSalary} >Increment Salary </Button>

        </div>
    )
}

export default ParentComponent

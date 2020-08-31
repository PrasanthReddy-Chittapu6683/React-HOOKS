import React, { useEffect, useRef } from 'react'

function FoucsInputUseRef() {

    const inputTxtRef = useRef(null)

    useEffect(() => {
        //Focus the input element
        inputTxtRef.current.focus()
        return () => {
            // cleanup
        }
    }, [])


    return (
        <div>
            <input type='text' ref={inputTxtRef} />
        </div>
    )
}

export default FoucsInputUseRef

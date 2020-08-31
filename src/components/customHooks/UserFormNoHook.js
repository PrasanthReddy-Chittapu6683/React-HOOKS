import React from 'react'
import useInputCustomHook from './useInputCustomHook'

function UserFormNoHook() {
    const [FirstName, bindFirstName, resetFirstName] = useInputCustomHook('')
    const [LastName, bindLastName, resetLastName] = useInputCustomHook('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Helo ${FirstName} , ${LastName}`)
        resetLastName()
        resetFirstName()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input  {...bindFirstName} type='text' />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type='text'  {...bindLastName} />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UserFormNoHook

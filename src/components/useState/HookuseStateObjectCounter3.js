import React, { useState } from 'react'

function HookuseStateObjectCounter3() {
    const objVal = {
        firstName: '',
        lastName: ''
    }
    const [name, setName] = useState(objVal)

    return (
        <div>
            <form>
                <input type='text' value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} ></input>
                <input type='text' value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} ></input>
                <h3>Fist Name: {name.firstName}</h3>
                <h3>Last Name: {name.lastName}</h3>
                <small>JSON format of object: which we using for textbox : {JSON.stringify(name)}</small>
            </form>
        </div>
    )
}

export default HookuseStateObjectCounter3

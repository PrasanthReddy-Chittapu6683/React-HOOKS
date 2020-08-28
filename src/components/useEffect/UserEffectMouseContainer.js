import React, { useState } from 'react'
import UseEffectFuncCompRunOnce5 from './UseEffectFuncCompRunOnce5'

function UserEffectMouseContainer() {

    const [display, setdisplay] = useState(true)


    return (
        <div>
            <button onClick={() => setdisplay(!display)}>Toggel to mount/Unmount `UseEffectFuncCompRunOnce5` component</button>
            {display && <div style={{color:'green'}}><UseEffectFuncCompRunOnce5/> </div> }
            {!display && <div style={{color:'orangered'}}>UseEffectFuncCompRunOnce5 is Unmounted</div> }
        </div>
    )
}

export default UserEffectMouseContainer

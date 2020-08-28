import React, { useContext } from 'react'
import ComponentF6 from './ComponentF6'
import { UserContext, LanguageContext } from '../../App'



function ComponentE6() {

    const User_Context = useContext(UserContext)
    const Language_Context = useContext(LanguageContext)

    return (
        <div>
            <div>
                <h3> This text is displaynig using useContext() HOOK : </h3><div> UserContext msg : <b style={{ color: "cornflowerblue" }}>{User_Context}</b> &
                <br />LanguageContext msg: <b style={{ color: "cornflowerblue" }}>{Language_Context}</b>  </div>
            </div>
            <ComponentF6></ComponentF6>
        </div>
    )
}

export default ComponentE6

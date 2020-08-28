import React from 'react'
import { UserContext, LanguageContext } from '../../App'
function ComponentF6() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <LanguageContext.Consumer>
                                {
                                    lang => {
                                        return <div> 
                                            <h3> This text is displaynig using React.Context class Component :</h3> 
                                             User Context value from UserContext obect : <b style={{ color: "orangered" }}> {user} </b><br /> This is from LanguageContext
                                    object <b style={{ color: "orangered" }}> {lang}</b> </div>
                                    }
                                }
                            </LanguageContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF6

import React, { useEffect } from 'react'

function useDocumentTilteHook(Count) {
    useEffect(() => {
        document.title = `Increment Count is : ${Count}`;
        return () => {
            // cleanup
        }
    }, [Count])
}

export default useDocumentTilteHook

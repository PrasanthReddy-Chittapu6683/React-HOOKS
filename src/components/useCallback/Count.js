import React from 'react'

function Count(props) {
    const { text, count } = props
    console.log("useCallback() -- Rendering count: " + text)

    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(Count)

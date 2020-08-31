import { useState } from 'react'

function useCustomHookCounter(initialCountVal = 0, cntVal) {
    const [Count, setCount] = useState(initialCountVal)
    const IncrementFun = () => {
        setCount(prevCnt => prevCnt + cntVal)
    }
    const DecrementFun = () => {
        setCount(prevCnt => prevCnt - cntVal)
    }
    const ResetFun = () => {
        setCount(initialCountVal)
    }
    return [Count, IncrementFun, DecrementFun, ResetFun]
}

export default useCustomHookCounter

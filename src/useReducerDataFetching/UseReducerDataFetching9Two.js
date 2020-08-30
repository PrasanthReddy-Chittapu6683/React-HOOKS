import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

/** Here we are grouping the variabled into single object*/
const initialState = {
    loading: true,
    error: '',
    post: {

    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            // state.error = ''
            // state.loading = false
            // state.post = action.apiResponse
            return {
                error: '',
                loading: false,
                post: action.apiResponse
            }

        case 'FETCH_ERROR':
            // state.error = action.apiResponse//'Some thing went wrong'
            // state.loading = false
            // state.post = action.apiResponse
            return {
                error: 'Some thing went wrong',
                loading: false,
                post: {}
            }

        default:
            return state
    }
}

function UseReducerDataFetching9Two() {

    const [state, dispatch] = useReducer(reducer, initialState)
    /** 2nd parameter we are passing empty array because we need to call this function only once. ie., we are replicating componentDidMount() method */
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(response => {
                dispatch({ type: 'FETCH_SUCCESS', apiResponse: response.data })
            }).catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            })
        return () => {


            // cleanup
        }
    }, [])

    return (
        <div>
            <div style={{ color: 'cornflowerblue' }}> {state.loading ? 'Loading ... Please wait' : state.post.title}</div>
            <b style={{ color: 'orangered' }}> {state.error ? state.error : null} </b>
        </div>
    )
}

export default UseReducerDataFetching9Two

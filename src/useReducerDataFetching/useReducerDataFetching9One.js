import React, { useState, useEffect } from 'react'
import axios from 'axios'
function UseReducerDataFetching9One() {
    const [Loading, setLoading] = useState(true)
    const [Error, setError] = useState('')
    const [Post, setPost] = useState({})

    /** 2nd parameter we are passing empty array because we need to call this function only once. ie., we are replicating componentDidMount() method */
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(response => {
                setLoading(false);
                setPost(response.data)
                setError('')
            }).catch(error => {
                setLoading(false);
                setError('Something went wrong !!!')
                setPost({})
            })
        return () => {


            // cleanup
        }
    }, [])


    return (
        <div>
            {Loading ? 'Loading ... Please wait' : Post.title}
            <b style={{ color: 'orangered' }}>   {Error ? Error : null}</b>
        </div>
    )
}

export default UseReducerDataFetching9One

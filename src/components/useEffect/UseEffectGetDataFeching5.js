import React, { useState, useEffect } from 'react'
import axios from 'axios'

function UseEffectGetDataFeching5() {
    const [Posts, setPosts] = useState([])
    // const [Id, setId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(
            response => {
                console.log(response.data)
                setPosts(response.data)
            }
        ).catch(error => {
            console.log(error)
        })
        return () => {
            // cleanup
        }
    }, [])
    return (
        <div style={{
            overflow: "auto", height: "100px", border: "1px solid deepskyblue", width: "53%"
        }}>
            <table >
                <thead>
                    <tr>
                        <td>
                            ID
                    </td>
                        <td>
                            Title
                    </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        Posts.map(val => (

                            <tr key={val.id}>
                                <td>
                                    {val.id}
                                </td>
                                <td>
                                    {val.title}
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
            {/* {
                Posts.map(post => (<div key={post.id}><span > * {post.title} </span><br /></div>))
            } */}


        </div >
    )
}

export default UseEffectGetDataFeching5

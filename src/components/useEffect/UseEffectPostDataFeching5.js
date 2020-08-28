import React, { useState, useEffect } from 'react'
import axios from 'axios';

function UseEffectPostDataFeching5() {

    const [ID, setID] = useState(1)
    const [displayData, setDisplayData] = useState({})

    const [Text_ID, setText_ID] = useState(1)
    const [buttonClickPost, setbuttonClickPost] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClickPost}`).then(
            response => {
                console.log(response.data)
                setDisplayData(response.data)
            }
        ).catch(error => {
            console.log(error)
        })
        return () => {
            // cleanup
        }
    }, [buttonClickPost])


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${ID}`).then(
            response => {
                console.log(response.data)
                setDisplayData(response.data)
            }
        ).catch(error => {
            console.log(error)
        })
        return () => {
            // cleanup
        }
    }, [ID])

    const setIDFunc = (e) => {
        setID(e.target.value)
    }
    const setbuttonClickPostFunc = () => {
        setbuttonClickPost(Text_ID)
    }
    return (
        <div>
            <label>Type ID to fetch data: </label>
            <input type='text' onChange={setIDFunc} value={ID} />
            (OR) Fetch data on Button click
            <input type='text' value={Text_ID} onChange={e => setText_ID(e.target.value)} />
            <button onClick={setbuttonClickPostFunc}>Fetch POST data</button>

            <table>
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
                    <tr>
                        <td>
                            {displayData.id}
                        </td>
                        <td>
                            {displayData.title}
                        </td>
                    </tr>
                </tbody>
            </table>



        </div>
    )
}

export default UseEffectPostDataFeching5

import React, { Component } from 'react'

class ClassuseStateCounter1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.increment}>Click to see Count : {this.state.count} </button> 
            </div>
        )
    }
}

export default ClassuseStateCounter1

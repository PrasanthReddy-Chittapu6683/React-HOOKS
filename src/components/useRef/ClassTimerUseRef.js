import React, { Component } from 'react'

export class ClassTimerUseRef extends Component {
    interval
    constructor(props) {
        super(props)

        this.state = {
            timer: 0
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ timer: prevState.timer + 1 }))
        }, 1000)
    }
    componentWillMount() {
        clearInterval(this.interval)
    }
    render() {
        return (
            <div>
                Timer using Class Function: {this.state.timer}
                <button onClick={() => clearInterval(this.interval)}>ClearTimer</button>
            </div>
        )
    }
}

export default ClassTimerUseRef

import React, { Component } from 'react'

class UseEffectClassComponent5 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ''
        }
    }

    /**This method triggers once while loading the component */
    componentDidMount() {
        document.title = `Cliked ${this.state.count} times`
        console.log(`componentDidMount - Count : ${this.state.count}`)
        // console.log(`componentDidMount - Name : ${this.state.name}  `)
    }
    /**This method triggers always while updating the state value.. ie., while click on the button we are incrementing the state.count value.*/
    componentDidUpdate(pervProps, prevState) {
        if (prevState.count !== this.state.count) {// Here we are preventing unnecesary execution of this lines.
            document.title = `Cliked ${this.state.count} times`
            console.log(`componentDidUpdate - Count : ${this.state.count} - Prev props: ${pervProps.count} - Prev State: ${prevState.count} `)
            console.log(`componentDidUpdate - Name : ${this.state.name} - Prev props: ${pervProps.name} - Prev State: ${prevState.name} `)
        }

    }



    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e => { this.setState({ name: e.target.value }) }} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click {this.state.count} times
                </button>
            </div>
        )
    }
}

export default UseEffectClassComponent5

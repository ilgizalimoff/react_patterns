import React from 'react'

class ClassCounter extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            count: 0
        }
        this.icrement = this.icrement.bind(this)
        this.decrement = this.decrement.bind(this)

    }
    icrement() {
        this.setState({count: this.state.count + 1})
    }
    decrement() {
        this.setState({count: this.state.count - 1})
    }
    render() {
        return (
            <div className="App">
                <p>{this.state.count}</p>
                <div className='buttons'>
                    <button onClick={this.icrement}>Icrement</button>
                    <button onClick={this.decrement}>Decrement</button>
                </div>
            </div>
        )
    }
}

export default ClassCounter
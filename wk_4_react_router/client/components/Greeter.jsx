import React from 'react'

const initialGreeterState = {count: 0}
export class Greeter extends React.Component {

  constructor(props) {
    super(props)
    this.state = initialGreeterState
  }
  resetState() {
    this.setState(initialGreeterState)
  }
  render() {
    let {greeting} = this.props
    return <div>
      <div>
        <button onClick={() => {
            alert(greeting)
            this.setState({count: this.state.count + 1}) 
          }
        }>Greet</button>
        <button onClick={() => this.resetState()}>Reset</button>
      </div>
      <div>
        Count: {this.state.count} 
      </div>
    </div>
  }
}


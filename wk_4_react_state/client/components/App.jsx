import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showGreeter: true,
      toggleLabel: 'Toggle'
    }
  }
  toggleGreeter() {
    console.log('called')
    this.setState({showGreeter: !this.state.showGreeter})
  }

  handleClick(e) {
    console.log(e)
    console.log('clicked')
    e.preventDefault()
  }
  render() {
    console.log(this.state)
    return (
      <div>
      <h1>React development has begun!</h1>
      <a href='http://google.com' onClick={this.handleClick.bind(this)}>Google</a>
      <button 
        onClick={this.toggleGreeter.bind(this)}
        onMouseEnter={() => this.setState({toggleLabel: 'Switch'})}
        onMouseOut={() => this.setState({toggleLabel: 'Toggle'})}
      >{this.state.toggleLabel}</button>
      {this.state.showGreeter && <Greeter greeting='hello'/>}
      </div>
    )
  }
}


const initialGreeterState = {count: 0}
class Greeter extends React.Component {

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

export default App


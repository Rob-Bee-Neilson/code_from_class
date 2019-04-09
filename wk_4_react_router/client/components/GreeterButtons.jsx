import React, {Component} from 'react'
import {Greeter} from './'

export class GreeterButtons extends Component {
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

import React from 'react'
import {GreeterButtons} from './'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React development has begun!</h1>
        <Router>
          <Route path='/' component={Nav} />
          <Route exact={true} path='/' component={GreeterButtons} />
          <Route path='/bananas' component={() => <div>yum</div>} />
        </Router>
      </div>
    )
  }
}

function Nav(props) {
  return <div>
      <Link to='/'>Home</Link>
      <Link to='/bananas'>yummy</Link>
    </div>
}

export default App


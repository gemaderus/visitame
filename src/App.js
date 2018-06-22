import React, { Component } from 'react'
import './Common.css'
import Home from './Views/Home'
import Work from './Views/Work'
import NotMatch from './Views/NotMatch'
import Demo from './Views/Demo'
import Clients from './Views/Clients'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  state = {
    open: false
  }

  toggleMenu = () => {
    const { open } = this.state
    this.setState({
      open: !open
    })
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={props => <Home {...props} open={this.state.open} toggleMenu={this.toggleMenu} />}
          />
          <Route path="/como-funciona" component={Work} />
          <Route path="/demo" component={Demo} />
          <Route path="/nuestros-clientes" component={Clients} />
          <Route component={NotMatch} />
        </Switch>
      </Router>
    )
  }
}

export default App

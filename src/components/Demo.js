import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './demo.css'

class Demo extends Component {
  render() {
    return (
      <div className="demo container flex-module">
        <div>
          <h2>Prúebalo ya</h2>
          <p>Sin ataduras. Sin datos de pago. 100% gratuito</p>
        </div>
        <div>
          <Link className="btn btn-main" to="/demo">
            Prueba la demo
          </Link>
        </div>
      </div>
    )
  }
}

export default Demo

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './hero.css'

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="container">
          <div className="hero-intro">
            <h1>
              Encuentra <br />casa a tu aire
            </h1>
            <p>Descubre viviendas de manera independiente</p>
            <Link className="btn btn-main" to="/demo">
              Prueba la demo
            </Link>
            <span>o </span>
            <Link to="/demo">descubre las viviendas</Link>
          </div>
          <div className="hero-image" />
        </div>
      </div>
    )
  }
}

export default Hero

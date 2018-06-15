import React, { Component } from 'react'
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
            <a href="#">Prueba la demo</a>
          </div>
          <div className="hero-image" />
        </div>
      </div>
    )
  }
}

export default Hero

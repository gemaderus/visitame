import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './info.css'

class Info extends Component {
  render() {
    return (
      <div className="container flex-module">
        <div className="info-text">
          <h2>Reserva. Visita. Compra</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae adipisci modi suscipit animi, ad esse
            unde ipsa labore, tenetur libero amet laborum in commodi! Dolorem magnam similique modi repudiandae vero.
          </p>
          <Link to="/demo">Descubre como funciona</Link>
        </div>
        <div className="info-image" />
      </div>
    )
  }
}

export default Info

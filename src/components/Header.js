import React, { Component } from 'react'
import './header.css'

class Header extends Component {
  render() {
    return (
      <header className="header container">
        <div className="hamburger">
          <button>Hamburger</button>
        </div>
        <div className="logo">
          <a href="">Logo</a>
        </div>
        <nav className="navigation">
          <ul className="nav-menu">
            <li className="nav-menu-item is-hidden-md">
              <a href="#" className="nav-menu-link">
                Inicio
              </a>
            </li>
            <li className="nav-menu-item">
              <a href="#" className="nav-menu-link">
                Como funciona
              </a>
            </li>
            <li className="nav-menu-item">
              <a href="#" className="nav-menu-link">
                Nuestros clientes
              </a>
            </li>
            <li className="nav-menu-item is-hidden-md">
              <a href="#" className="nav-menu-link">
                Prueba la demo
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header

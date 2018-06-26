import React, { Component } from 'react'
import './header.css'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    const { toggleMenu, isOpen } = this.props
    const css = 'header'

    return (
      <header className={isOpen ? `${css} is-open` : css}>
        <div className="container">
          <div>
            <button className="hamburger btn" onClick={e => toggleMenu()}>
              <span className="line" />
              <span className="line" />
            </button>
          </div>
          <div className="logo">
            <Link className="nav-menu-link" to="/">
              Logo
            </Link>
          </div>
          <nav className="navigation">
            <ul className="nav-menu">
              <li className="nav-menu-item is-hidden-md">
                <Link className="nav-menu-link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link className="nav-menu-link" to="/como-funciona">
                  Como funciona
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link className="nav-menu-link" to="/nuestros-clientes">
                  Nuestros clientes
                </Link>
              </li>
              <li className="nav-menu-item is-hidden-md">
                <Link className="nav-menu-link" to="/demo">
                  Prueba la demo
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header

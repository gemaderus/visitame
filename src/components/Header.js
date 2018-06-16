import React, { Component } from 'react'
import './header.css'

class Header extends Component {
  render() {
    const { toggleMenu, isOpen } = this.props
    const css = 'header container'

    return (
      <header className={isOpen ? `${css} is-open` : css}>
        <div>
          <button className="hamburger btn" onClick={e => toggleMenu()}>
            <span className="line" />
            <span className="line" />
          </button>
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

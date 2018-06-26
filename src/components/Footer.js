import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div className="footer-navigations-holder">
          <div className="footer-navigations">
            <nav>
              <h3 className="footer-title">Descubre</h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <Link to="/como-funciona">Como funciona</Link>
                </li>
                <li className="footer-item">
                  <Link to="/nuestros-clientes">Nuestros clientes</Link>
                </li>
              </ul>
            </nav>
            <nav>
              <h3 className="footer-title">Info</h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <Link to="/demo">Prueba la demo</Link>
                </li>
                <li className="footer-item">
                  <a>Contacta</a>
                </li>
              </ul>
            </nav>
            <nav>
              <h3 className="footer-title">Sigue la pista</h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="#">Twitter</a>
                </li>
                <li className="footer-item">
                  <a href="#">Linkedin</a>
                </li>
              </ul>
            </nav>
          </div>
          <nav className="footer-terms">
            <ul className="footer-terms-list">
              <li>
                <a href="#">Términos y condiciones</a>
              </li>
              <li>
                <a href="#">Política de privacidad</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-copy">
          <a href="#" className="footer-logo">
            Logo
          </a>
          <span>
            2018 <span>&copy;</span>Visit.me
          </span>
        </div>
      </footer>
    )
  }
}

export default Footer

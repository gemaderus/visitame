import React, { Component } from 'react'
import './module.css'

class Module extends Component {
  render() {
    const { id, title, text } = this.props
    return (
      <div className="container">
        <div className="flex-module">
          <div className>
            <div className="module-title">
              <span className="rounded">{id}</span>
              <h2>{title}</h2>
            </div>
            <p>{text}</p>
          </div>
          <div className="info-image" />
        </div>
      </div>
    )
  }
}

export default Module

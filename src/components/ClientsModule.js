import React, { Component } from 'react'

const ClientsModule = () => {
  return (
    <div className="clients-module">
      <div className="container">
        <h3 className="text-center">Nuestros clientes</h3>
        <h1 className="text-center">Trabajando con los mejores</h1>
        <ul>
          <li>
            <img src="" alt="" />Logo
            <h2>Sareb</h2>
            <p>Te explicamos como trabajamos con Sareb</p>
            <a className="btn btn-main" href="">
              Lee el pdf
            </a>
          </li>
          <li>
            <h2>¿Tú?</h2>
            <p>Te explicamos como trabajamos con Sareb</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ClientsModule

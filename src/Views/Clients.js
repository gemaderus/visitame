import React, { Component } from 'react'
import Header from '../components/Header'
import ClientsModule from '../components/ClientsModule'
import Demo from '../components/Demo'
import Footer from '../components/Footer'
import './clients.css'

const Clients = (open, toggleMenu) => (
  <div className="clients">
    <Header isOpen={open} toggleMenu={toggleMenu} />
    <ClientsModule />
    <Demo />
    <Footer />
  </div>
)
export default Clients

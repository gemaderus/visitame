import React, { Component } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Info from './components/Info'
import Demo from './components/Demo'
import Footer from './components/Footer'
import './Common.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Info className="reverse" />
        <Info />
        <Demo />
        <Footer />
      </div>
    )
  }
}

export default App

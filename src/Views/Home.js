import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Demo from '../components/Demo'
import Footer from '../components/Footer'

const Home = (open, toggleMenu) => (
  <div>
    <Header isOpen={open} toggleMenu={toggleMenu} />
    <Hero />
    <Info className="reverse" />
    <Info />
    <Demo />
    <Footer />
  </div>
)

export default Home

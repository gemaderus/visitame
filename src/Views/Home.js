import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Demo from '../components/Demo'
import Footer from '../components/Footer'
import DataInfo from '../components/Data-work'
import Module from '../components/Module'

const Home = (open, toggleMenu) => (
  <div>
    <Header isOpen={open} toggleMenu={toggleMenu} />
    <Hero />
    <Info className="reverse" />
    <Info />
    <div>{DataInfo.map(item => <Module key={item.id} title={item.title} text={item.text} id={item.id} />)}</div>
    <Demo />
    <Footer />
  </div>
)

export default Home

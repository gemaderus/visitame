import React from 'react'
import Header from '../components/Header'
import HeroWork from '../components/Hero-Work'
import DataWork from '../components/Data-work'
import Module from '../components/Module'
import Demo from '../components/Demo'
import Footer from '../components/Footer'

const Work = (open, toggleMenu) => (
  <div>
    <Header isOpen={open} toggleMenu={toggleMenu} />
    <HeroWork />
    <div>{DataWork.map(item => <Module key={item.id} title={item.title} text={item.text} id={item.id} />)}</div>
    <Demo />
    <Footer />
  </div>
)

export default Work

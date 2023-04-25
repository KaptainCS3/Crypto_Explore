import React from 'react'
import About from '../components/About'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import CurrentTab from '../components/CurrentTab'
const AboutUs = () => {
  return (
    <div>
        <Nav />
        <CurrentTab />
        <About />
        <Footer />
    </div>
  )
}

export default AboutUs
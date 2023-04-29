import React from 'react'
import About from '../components/About'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import CurrentTab from '../components/CurrentTab'
import ScrollTop from '../components/ScrollTop'
const AboutUs = () => {
  return (
    <div>
      <Nav />
      <CurrentTab path="About us" />
      <About />
      <ScrollTop />
      <Footer />
    </div>
  );
}

export default AboutUs
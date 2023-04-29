import React from 'react'
import Nav from '../components/Nav'
import CurrentTab from '../components/CurrentTab'
import Industry from '../components/Industry'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'

const Features = () => {
  return (
    <>
        <Nav />
        <CurrentTab path="Feature" />
        <Industry />
        <ScrollTop />
        <Footer />
    </>
  )
}

export default Features
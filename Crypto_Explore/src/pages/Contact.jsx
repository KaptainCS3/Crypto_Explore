import React from 'react'
import Nav from '../components/Nav'
import CurrentTab from '../components/CurrentTab'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
const Contact = () => {
  return (
    <div>
        <Nav />
        <CurrentTab path="Contact Us" />
        <ContactForm />
        <ScrollTop />
        <Footer />
    </div>
  )
}

export default Contact
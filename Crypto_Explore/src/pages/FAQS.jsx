import React from 'react'
import Nav from '../components/Nav'
import CurrentTab from '../components/CurrentTab'
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';

const FAQS = () => {
  return (
    <>
      <Nav />
      <CurrentTab path="FAQs" />
      <FAQ />
      <ScrollTop />
      <Footer />
    </>
  );
}

export default FAQS
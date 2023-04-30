import React from 'react'
import Nav from '../components/Nav'
import CurrentTab from '../components/CurrentTab'
import Token from '../components/Token'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'

const TokenSale = () => {
  return (
    <>
      <Nav />
      <CurrentTab path="Token Sales" />
      <Token background="bg-[#F2F8FE]"/>
      <ScrollTop />
      <Footer />
    </>
  );
}

export default TokenSale
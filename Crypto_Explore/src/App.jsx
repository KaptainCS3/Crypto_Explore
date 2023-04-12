import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Transaction from  './components/Transaction'
import Industry from "./components/Industry";
import Services from "./components/Services";
import Token from "./components/Token";
import FAQ from "./components/FAQ";
import "./App.css";
const App = () => {
  return (
    <div className="bg-[#F2F8FE]">
      <Nav />
      <main>
        <Hero />
        <About />
        <Transaction />
        <Industry />
        <Services />
        <Token />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;

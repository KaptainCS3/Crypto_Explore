import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Transaction from "./components/Transaction";
import Industry from "./components/Industry";
import Services from "./components/Services";
import Token from "./components/Token";
import FAQ from "./components/FAQ";
import ScrollTop from "./components/ScrollTop";
import ListMaps from "./components/ListMaps";
import "./App.css";
const App = () => {
  return (
    <div className="bg-[#F2F8FE]">
      <Nav />
      <main className="sm:px-0">
        <Hero />
        <About />
        <Transaction />
        <Industry />
        <Services
          background="bg-white"
          color="border-r-[#F2F8FE]"
          borderRight="border-r-white"
          mainBackground="bg-[#F2F8FE]"
        />
        <ListMaps />
        <Token background="bg-white" />
        <ScrollTop />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;

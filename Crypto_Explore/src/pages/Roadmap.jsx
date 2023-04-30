import React from "react";
import Nav from "../components/Nav";
import CurrentTab from "../components/CurrentTab";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import ListMaps from "../components/ListMaps";

const Roadmap = () => {
  return (
    <>
      <Nav />
      <CurrentTab path="Roadmap" />
      <ListMaps />
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Roadmap;

import React from "react";
import Nav from "../components/Nav";
import Services from "../components/Services";
import CurrentTab from "../components/CurrentTab";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";

const Service = () => {
  return (
    <div>
      <Nav />
      <CurrentTab path="Services" />
      <Services
        background="bg-[#F2F8FE]"
        color="after:border-r-white"
        borderRight="hover:after:border-r-[#F2F8FE]"
        mainBackground="bg-white"
      />
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default Service;

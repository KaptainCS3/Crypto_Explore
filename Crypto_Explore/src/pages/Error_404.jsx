import React from "react";
import Nav from "../components/Nav";
import CurrentTab from "../components/CurrentTab";
import Error404 from "../components/Error404";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";

const Error_404 = () => {
  return (
    <>
      <Nav />
      <CurrentTab path="404 Error" />
      <Error404 />
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Error_404;

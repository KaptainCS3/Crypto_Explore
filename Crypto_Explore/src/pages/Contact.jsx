import React from "react";
import Nav from "../components/Nav";
import CurrentTab from "../components/CurrentTab";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import MapView from "../components/MapView";
const Contact = () => {
  return (
    <div>
      <Nav />
      <CurrentTab path="Contact Us" />
      <ContactForm />
      <MapView />
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default Contact;

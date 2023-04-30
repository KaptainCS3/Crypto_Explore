import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";
import Roadmap from "./pages/Roadmap";
import Contact from "./pages/Contact";
import App from "./App";
import TokenSale from "./pages/TokenSale";
import Features from "./pages/Features";
import FAQS from './pages/FAQS'
import Error_404 from "./pages/Error_404";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="service" element={<Service />} />
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="features" element={<Features />} />
        <Route path="token" element={<TokenSale />} />
        <Route path="faqs" element={<FAQS />} />
        <Route path="error_404" element={<Error_404 />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

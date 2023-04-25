import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Service from './pages/Service';
import Roadmap from './pages/Roadmap'
import Error_404 from './pages/Error_404'
import App from './App'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='aboutus' element={<AboutUs />} />
      <Route path='service' element={<Service />} />
      <Route path='roadmap' element={<Roadmap />} />
      <Route path='error' element={<Error_404 />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

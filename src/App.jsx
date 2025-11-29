import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import PartDetails from './Components/partdetail/partdetail';
import Hero from './Components/Hero/hero';
import Home from './Pages/Home/home';
import Contact from './Pages/Contact/contact';
import ServicePage from './Pages/Service-page/service-page';
import GalleryPage from './Pages/Gallery-page/gallery-page';
import AboutPage from './Pages/About/about-page';
import ServiceDetailsPage from './Pages/ServiceDetailsPage/ServiceDetailsPage';
import ScrollToTop from './ScrollToTop';
import AdminTestimonials from './Admin/AdminTestimonials';
import AdminLogin from './Admin/AdminLogin';
import AdminLayout from './Admin/AdminLayout';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* <Route path="/" element={<Hero />} /> */}
        <Route path="/part-details" element={<PartDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/servicePage" element={<ServicePage />} />
        <Route path="/gallery-page" element={<GalleryPage />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/service-details/:id" element={<ServiceDetailsPage />} />
    <Route path="/admin-testimonials" element={<AdminTestimonials />} />
         <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard/*" element={<AdminLayout />} />
      </Routes>
    </>
  );
};

export default App;

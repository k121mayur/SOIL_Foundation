// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import OurWorkPage from './pages/OurWorkPage';
import ContactUsPage from './pages/ContactUsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        
        {/* Define your routes here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/work" element={<OurWorkPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

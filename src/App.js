import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import OurWorkPage from './pages/OurWorkPage';
import ContactUsPage from './pages/ContactUsPage';

// ScrollToTop Component
function ScrollToTop({ children }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return children;
}

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <a
            href="#main-content"
            className="visually-hidden-focusable p-3 bg-light text-dark position-absolute start-0 top-0"
            style={{ zIndex: 9999 }}
          >
            Skip to main content
          </a>
          <CustomNavbar />

          {/* Define your routes here wrapped in main landmark */}
          <main id="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/work" element={<OurWorkPage />} />
              <Route path="/contact" element={<ContactUsPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;